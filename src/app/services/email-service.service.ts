import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Email } from '../model/Message';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  base_url="https://ms-emails.azurewebsites.net/emails/send"
 

  constructor(private http: HttpClient) { }

  sendEmail(email:Email): Observable<Email>{
    return this.http
      .post<Email>(this.base_url,email);
  }
}
