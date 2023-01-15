import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http:HttpClient) { }
  addMouvement(mt:any):Observable<any>{
    return this.http.post('http://localhost:8082/hms/api/debit',mt);
  }
  credit(mt:any):Observable<any>{
    return this.http.post('http://localhost:8082/hms/api/credit',mt);
  }
  listeJournal():Observable<any>{
    return this.http.get('http://localhost:8082/hms/api/journals');
  }
  totalentree():Observable<any>{
    return this.http.get('http://localhost:8082/hms/api/totale');
  }
  totalSortie():Observable<any>{
    return this.http.get('http://localhost:8082/hms/api/totals');
  }
}
