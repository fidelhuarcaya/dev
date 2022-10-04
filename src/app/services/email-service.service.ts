import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Email } from '../model/Message';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  base_url="https://send-email-api-rest.herokuapp.com/api/sendemail"
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     

    }),
  };
  constructor(private http: HttpClient) { }

  sendEmail(email:Email): Observable<Email>{
    const body=JSON.stringify(email)
    console.log("body is: "+body)
    console.log(body)
    return this.http
      .post<Email>(this.base_url,
         JSON.stringify(email),this.httpOptions);
  }
  greeting():Observable<String>{
    return this.http.get<String>(this.base_url).pipe(retry(1), catchError(this.errorHandl));
  }



  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
