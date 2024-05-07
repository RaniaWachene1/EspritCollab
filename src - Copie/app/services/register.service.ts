import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl = 'http://localhost:8087/api/signup'; 

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, userData);
  }
}
