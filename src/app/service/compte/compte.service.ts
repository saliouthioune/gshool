import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }
  private baseUrl ='http://localhost:8082/hms/api/compte';
  private baseUrl1 ='http://localhost:8082/hms/api/operation';
  addClass(compte:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}`,compte);
  }
  getAllCompte():Observable<any>{
    return this.http.get('http://localhost:8082/hms/api/compte');
  }
  retirer(operation:any){
    return this.http.post('http://localhost:8082/hms/api/operation',operation);
  }
  paiementSde(operation:any){
    return this.http.post('http://localhost:8082/hms/api/sde',operation)
  }
  listeOpe():Observable<any>{
    return this.http.get('http://localhost:8082/hms/api/operation');
  }
  getCompteById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl1}/${id}`)
  }
}
