import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cour } from 'src/app/cour/cour';
import { SimpleCourDTO } from 'src/app/cour/SimpleCourDTO';
import { Remunerer } from 'src/app/remunerer/Remunerer';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  constructor(private http:HttpClient) { }
  addCour(inss:Cour) : Observable<any> {
    return this.http.post<any>('http://localhost:8083/hms/api/addcour',inss);
}
getListeCours():Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8083/hms/api/listecours');
}
addRemunerer(inss:Remunerer) : Observable<any> {
  return this.http.post<any>('http://localhost:8087/hms/api/addremunrer',inss);
}
getListeRemunerer():Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8087/hms/api/allremunerer');
}
getListeCoursClasse(id:any):Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8083/hms/api/listecours/'+id);
}
}
