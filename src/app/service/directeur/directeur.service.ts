import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirecteurService {
  private baseUrl ='http://localhost:8083/hms/api/addd';
 
  constructor(private http:HttpClient) { }
  addDirecteur(doctor:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}`,doctor);
  }
}
