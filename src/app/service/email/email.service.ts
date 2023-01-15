import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MailDTO } from 'src/app/paiement/maildto';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8082/hms/api/email';

  sentEmail(email :MailDTO):Observable<any> {
    return this.http.post('http://localhost:8083/hms/api/email', email);
  }
}
