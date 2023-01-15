import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaissiereService {

  constructor(private http:HttpClient) { }
  saveCais(prof:any):Observable<any>{
    return this.http.post('http://localhost:8083/hms/api/caissiere',prof);
}
getAllCais():Observable<any>{
return this.http.get('http://localhost:8083/hms/api/caissiers');
}
deleteCais(id:number):Observable<any>{
return this.http.delete('http://localhost:8083/hms/api/caissiere/'+id);
}
updateCais(id:number,prof:any):Observable<any>{
return this.http.put('http://localhost:8083/hms/api/caissiere/'+id,prof);
}
getCaisById(id:number):Observable<any>{
return this.http.get('http://localhost:8083/hms/api/caissiere/'+id);
}
}
