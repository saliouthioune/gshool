import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnneesService {

  constructor(private http:HttpClient) { }
  addNewYear(annee:any):Observable<any>{
    return this.http.post('http://localhost:8083/hms/api/addanne',annee);
  }
  listeYear():Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/allanne');
  }
  getById(id:number):Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/anneacad/'+id);
  }
}
