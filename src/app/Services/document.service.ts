import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Document } from '../Models/Document.model';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentsSubject: BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]);

  private apiUrl = 'http://localhost:8087';

  constructor(private http: HttpClient) {}
  createDocument(document: Document): Observable<Document> {
    return this.http.post<Document>(this.apiUrl+"/addDoc", document);
  }
  
  getAllDocument(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/getAllDoc`);
  }  
  
  retrieveById(idDoc: number): Observable<Document> {
    const url = `${this.apiUrl}/getDoc/${idDoc}`;
    return this.http.get<Document>(url);
  }  
  
  updateDocument(document: Document): Observable<Document> {
    const url = `${this.apiUrl}/updateDoc`;
    return this.http.put<Document>(url, document);
  }  

  deleteDocument(id: number): Observable<void> {
    const url = `${this.apiUrl}/deleteDoc/${id}`;
    return this.http.delete<void>(url);
  }  

  getAllModules(): Observable<string[]> {
    return this.getAllDocument().pipe(
      map(documents => {
        const modulesSet = new Set<string>();
        documents.forEach(doc => {
          modulesSet.add(doc.module);
        });
        return Array.from(modulesSet);
      })
    );
  }
}