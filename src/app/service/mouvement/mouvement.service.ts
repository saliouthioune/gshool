import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MouvementService {

  constructor(private http:HttpClient) { }
  addMouvement(mt:any):Observable<any>{
    return this.http.post('http://localhost:8082/hms/api/savemt',mt);
  }
  getMouvement():Observable<any>{
    return this.http.get('http://localhost:8082/hms/api/getmt');
  }
  gettotalrestant():Observable<any>{
    return this.http.get('http://localhost:8082/hms/api/soldf');
  }
}
