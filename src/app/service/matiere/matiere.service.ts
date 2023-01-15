import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http:HttpClient) { }
  addMatier(is:any):Observable<any>{
       return this.http.post<any>('http://localhost:8083/hms/api/addmat',is);
  }
  listMatier():Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/mats');
}
getMatierById(id:number):Observable<any[]>{
  return this.http.get<any[]>('http://localhost:8083/hms/api/mat/'+id);
}
}
