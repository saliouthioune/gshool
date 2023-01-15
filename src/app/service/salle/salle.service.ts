import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http:HttpClient) { }
  addSalle(salle:any):Observable<any>{
   return this.http.post("http://localhost:8083/hms/api/salle",salle);
  }
  getAllSalle():Observable<any>{
   return this.http.get("http://localhost:8083/hms/api/salles");
  }
  updateSalle(id:number,salle:any):Observable<any>{
    return this.http.put("http://localhost:8083/hms/api/salleupdate/"+id,salle);
  }
  deleteSalle(id:number):Observable<any>{
    return this.http.delete("http://localhost:8083/hms/api/salle/"+id);
  }
  getSalleById(id:number):Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/salle/'+id);
  }
  getAllBatiment():Observable<any>{
    return this.http.get("http://localhost:8083/hms/api/bats");
   }
   addBatiment(bat:any):Observable<any>{
    return this.http.post("http://localhost:8083/hms/api/bat",bat);
   }
   updateBatiment(id:number,batiment:any):Observable<any>{
    return this.http.put("http://localhost:8083/hms/api/batimentupdate/"+id,batiment);
  }
  getBatimentById(id:number):Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/bat/'+id);
  }
  deleteBatiment(id:number):Observable<any>{
    return this.http.delete("http://localhost:8083/hms/api/bat/"+id);
  }
}
