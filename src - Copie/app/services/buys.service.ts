import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buys } from '../models/Buys.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class BuysService {

  private apiUrl = 'http://localhost:8087';

  constructor(private http: HttpClient) {}
  createbuy(buy: Buys): Observable<Buys> {
    return this.http.post<Buys>(this.apiUrl+"/addBuy", buy);
  }
  getDocsByUser(user:User):Observable<Buys[]>{
    return this.http.get<Buys[]>(this.apiUrl+"myBuys")
  }
}
