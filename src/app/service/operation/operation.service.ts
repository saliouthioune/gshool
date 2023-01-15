import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private baseUrl ='http://localhost:8082/hms/api/paiementss';
  private baseUrl2 ='http://localhost:8082/hms/api/paiements';
  constructor(private http:HttpClient) { }
  paiement(paiement:any):Observable<any>{
    return this.http.post('http://localhost:8082/hms/api/paiements',paiement);
  }
  getPaiementById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl2}/${id}`)
  }
  getAllP():Observable<any>{
    return this.http.get('http://localhost:8082/hms/api/paiements');
  }
  getOperationPtById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}
