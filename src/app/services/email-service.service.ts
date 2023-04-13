import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, take, tap } from 'rxjs';
import { Email } from '../model/Message';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  base_url="https://ms-emails.azurewebsites.net/emails/send"
 
  constructor(private http: HttpClient) { }

  sendEmail(email: Email): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .post<string>(this.base_url, email, httpOptions).pipe(take(1));
  }
}
