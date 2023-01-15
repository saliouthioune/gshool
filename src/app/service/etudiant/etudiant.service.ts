import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }
  private baseUrl ='http://localhost:8083/hms/api/etudiant';
 
  addDoctor(doctor:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}`,doctor);
  }

  updateDoctor(id:number,doctor:any) :Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,doctor);
  }

  deleteDoctor(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllDoctor():Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/etudiant');
  }

  getDoctorById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  checkIsAvailable(doctor:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}/check`, doctor);
  }
  getAllEtudiantsd():Observable<any>{
    return this.http.get('http://localhost:8081/hms/api/cours');
  }
  getAllEtudiantsp():Observable<any>{
    return this.http.get('http://localhost:8082/hms/api/eleves');
  }

  getAllEtudiantsi():Observable<any>{
    return this.http.get('http://localhost:8081/hms/api/ins');
  }
}
