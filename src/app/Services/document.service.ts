import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Document } from '../Models/Document.model';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentsSubject: BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]);

  private apiUrl = 'http://localhost:8087';

  constructor(private http: HttpClient) {}
  createDocument(document: Document): Observable<Document> {
    return this.http.post<Document>(this.apiUrl+"/addDoc", document).pipe(
      tap(newDocument => {
        const currentDocuments = this.documentsSubject.value;
        const updatedDocuments = [...currentDocuments, newDocument];
        this.documentsSubject.next(updatedDocuments);
      })
    );
  }
  
  getAllDocument(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/getAllDoc`).pipe(
      tap((documents: Document[]) => {
        this.documentsSubject.next(documents);
      })
      );
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
}
