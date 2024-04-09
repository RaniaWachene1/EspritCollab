import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8087/api/auth';

   jwtToken: any; 
   userId: number | undefined;
  constructor(private http: HttpClient, private router: Router) {}
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signin`, { username, password }).pipe(
      tap((response: any) => {
        this.userId = response.idUser; 
        this.jwtToken = response.token;
        localStorage.setItem('userData', JSON.stringify(response));

      })
    );
  }
  
  register(registerData: { [key: string]: any }): Observable<any> {
    const formData: FormData = new FormData();
    Object.entries(registerData).forEach(([key, value]) => {
      if (key === 'image') {
        formData.append('file', value, value.name); 
      } else {
        formData.append(key, value); 
      }
    });
  
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
  
    return this.http.post<any>(`${this.apiUrl}/signup`, formData, { headers: headers });
  }
  
  getJwtToken(): string | null {
    return this.jwtToken;
  }
  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }
}
