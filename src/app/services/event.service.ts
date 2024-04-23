import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from '../frontoffice/eventinfo/rating.model';
import { AuthService } from './auth.service';
import { Reservation } from '../frontoffice/eventinfo/reservation.model';



@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8087'; // Update with your backend base URL

  constructor(private http: HttpClient, private authService: AuthService) { }
  
  addEvent(eventData: { [key: string]: any }, idUser: number): Observable<any> {
    const formData: FormData = new FormData();
    
    Object.entries(eventData).forEach(([key, value]) => {
      if (key === 'image') {
        formData.append('file', value, value.name); // Assuming 'image' is the key for the image file
      } else {
        formData.append(key, value); // Append other form data
      }
    });
    
    formData.append('idUser', idUser.toString()); // Corrected here
    
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJXYWNoZW5lUmFuaWEiLCJpYXQiOjE3MTM1NjA0OTYsImV4cCI6MTcxNDQyNDQ5Nn0.HHVIZ_HYd1zEagI9Ow43quwyzHI2HrmzFFBwpkB4tdw'; // Replace 'your-auth-token' with the actual token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.post<any>(`${this.baseUrl}/addEvent`, formData, { headers: headers });
  }
  

  

  getEventById(idEvent: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/getEventById/${idEvent}`);
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/getAllEvents`);
  }

  updateEvent(idEvent: number,eventData: any): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/updateEvent/${idEvent}`, eventData);
  }

  deleteEvent(idEvent: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteEvent/${idEvent}`);
  }
  addCommentToEvent(eventId: number, idUser: number, commentData: any): Observable<any> {
    // Convert the commentData object to a JSON string
    const jsonData = JSON.stringify(commentData);
    
    // Set the headers explicitly to specify the content type as JSON
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    // Make the POST request with the specified headers
    return this.http.post(`${this.baseUrl}/api/events/${eventId}/comments/${idUser}`, jsonData, { headers });
  }
  getAllCommentsForEvent(eventId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/api/events/${eventId}/comments`);
  }  
  addRatingToEvent(eventId: number, userId: number, ratingValue: number): Observable<any> {
    const ratingData = { valueR: ratingValue };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(
      `${this.baseUrl}/api/events/${eventId}/ratings/${userId}`,
      ratingData,
      { headers }
    );
  }
  getAllRatingsForEvent(eventId: number): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${this.baseUrl}/api/events/${eventId}/ratings`);
  }
  getAverageRatingForEvent(eventId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/api/events/${eventId}/average-rating`);
  }
  assignUserToEvent(idUser: number, idEvent: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/api/assigneventtouser/${idUser}/${idEvent}`, {});
  }
  addReservation(userId: number, eventId: number, reservation: Reservation): Observable<any> {
    return this.http.post<Reservation>(`${this.baseUrl}/events/${userId}/${eventId}/reservations`, reservation);
  }
}

