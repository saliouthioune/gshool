import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComptesalaireService {

  constructor(private http:HttpClient) { }
  payerSalaire(comptesalaire:any){
    return this.http.post('http://localhost:8082/hms/api/payersalaire',comptesalaire);
  }
}
