import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http:HttpClient) { }
  private baseUrl ='http://localhost:8083/hms/api/paiement';

  addPaiement(niveau:any) :Observable<any>{
    return this.http.post('http://localhost:8083/hms/api/paiement',niveau);
  }
  addPaiementom(niveau:any) :Observable<any>{
    return this.http.post('http://localhost:8083/hms/api/paiementom',niveau);
  }
  updatePaiement(id:number,niveau:any) :Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,niveau);
  }

  deletePaiement(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllPaiement():Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/paiement');
  }

  getPaiementById(id:number) :Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/paiement/'+id);
  }
  checkIsAvailable(doctor:any) :Observable<any>{
    return this.http.post('http://localhost:8083/hms/api/paiement/check', doctor);
  }
  getEleveById(id:number) :Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/pp/'+id);
  }
  getAllEleve():Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/pps');
  }
}
