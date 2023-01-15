import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  
  constructor(private http:HttpClient) { }
  private baseUrl ='http://localhost:8083/hms/api/class';
  private baseUrl1 ='http://localhost:8083/hms/api/classe';
  addClass(doctor:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}`,doctor);
  }

  updateClass(id:number,doctor:any) :Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,doctor);
  }

  deleteClass(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllClass():Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/class');
  }

  getClassById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl1}/${id}`)
  }
  getAllInscrireClasse(n1:any,n2:any):Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/listec/'+n1+'/'+n2);
  }


}
