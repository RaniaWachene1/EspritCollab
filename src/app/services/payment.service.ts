import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Document } from '../models/Document.model';
import { DocumentService } from './document.service';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:8087/create-checkout-session';

  constructor(private http: HttpClient,private documentService: DocumentService) { }

  processPayment(idDoc: number) {
    return this.http.post<any>(this.apiUrl, this.documentService.retrieveById(idDoc));
  }
  proc22(document: Document): Observable<string> {
    console.log("Sending document to server:", document);
    return this.http.post<{ url: string }>(this.apiUrl, document).pipe(
      map((response) => {
        console.log("Received response from server:", response);
        return response.url;  // Extracting the URL from the JSON object
      })
    );
  }
}