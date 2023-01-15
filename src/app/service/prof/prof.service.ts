import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private http:HttpClient) { }
  saveProf(prof:any):Observable<any>{
        return this.http.post('http://localhost:8083/hms/api/prof',prof);
  }
  getAllProf():Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/prof');
  }
  deleteProf(id:number):Observable<any>{
    return this.http.delete('http://localhost:8083/hms/api/prof/'+id);
  }
  updateProf(id:number,prof:any):Observable<any>{
    return this.http.put('http://localhost:8083/hms/api/prof/'+id,prof);
  }
  getProfById(id:number):Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/prof/'+id);
  }
}
