import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscrire } from 'src/app/inscrire/Inscrire';
import { SimpleInscrireDTO } from 'src/app/inscrire/SimpleInscrireDTO';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http:HttpClient) { }
 private  API_URL='http://localhost:8083/hms/api';
  getCartItem (etudiantId : string, anneeId : string) : Observable<Inscrire> {
    return this.http.get<Inscrire>(`${this.API_URL}/api/cart-items/${etudiantId}/${anneeId}`)
}

addToUserCart (inss:any) : Observable<Inscrire> {
    return this.http.post<Inscrire>('http://localhost:8083/hms/api/inscription',inss);
}
getListeInscrire() : Observable<Inscrire[]> {
  return this.http.get<Inscrire[]>('http://localhost:8083/hms/api/inscriptions');
}
getInscriptionById(id:any) : Observable<Inscrire> {
  return this.http.get<Inscrire>('http://localhost:8083/hms/api/inscription/'+id);
}
}
