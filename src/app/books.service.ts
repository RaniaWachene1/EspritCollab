import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IsAvailable } from '../models/IsAvailable.model';
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8087';



  constructor(private http: HttpClient) { }

  addBook(book: Book): Observable<Book> {
   
    return this.http.post<Book>(`${this.baseUrl}/addBook`, book);  
  }

  getBookById(id: number): Observable<Book> {
   
    return this.http.get<Book>(`${this.baseUrl}/getBookById/${id}`);
  }

  getAllBK(): Observable<Book[]> {
    
    return this.http.get<Book[]>(`${this.baseUrl}/getAllBK`); 
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteBK/${id}`);
  }
  

  updateBook(id: number, book: Book): Observable<Book> {
    
    return this.http.put<Book>(`${this.baseUrl}/updateBK/${id}`, book);
  }
  uploadImage(formData: FormData): Observable<any> {
    // Remplacez 'yourApiEndpointForImageUpload' par votre véritable endpoint d'API
    return this.http.post<any>(`${this.baseUrl}src/assets/images/`, formData);
  }
  // Service: BookService
getQrCodeData1(book: Book): string {
  // Format des détails du livre pour un affichage texte simple
  const bookDetails = `Détails du livre:
TITLE: ${book.titleBook}
DESCIPTION: ${book.description}
LANGUAGE: ${book.language}
AVAILIBILITY: ${book.isAvailable }`;

  return bookDetails;
  
}

getQrCodeData(bookId: number): string {
  return `http:/192.168.1.214:4200/exchange-form/${bookId}`;
}
// Dans votre service de livres, ajoutez cette méthode
updatePhoneNumber(bookId: number, phoneNumber: string): Observable<any> {
  const url = `${this.baseUrl}/updateBook/${bookId}`;

  return this.http.put(url, phoneNumber);
}



}








  
  


