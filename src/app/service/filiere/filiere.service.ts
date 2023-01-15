import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FiliereService {
  constructor(private http:HttpClient) { }
  private baseUrl ='http://localhost:8082/hms/api/formation';

  addFormation(niveau:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}`,niveau);
  }

  updateFormation(id:number,niveau:any) :Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,niveau);
  }

  deleteFormation(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllFormation():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getFormationById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}
