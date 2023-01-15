import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private baseUrl ='http://localhost:8083/hms/api/parent';
  constructor(private http:HttpClient) { }
  addParent(doctor:any) :Observable<any>{
    return this.http.post('http://localhost:8083/hms/api/parent',doctor);
  }

  updateParent(id:number,doctor:any) :Observable<any>{
    return this.http.put('http://localhost:8083/hms/api/parentupdate/'+id,doctor);
  }

  deleteParent(id:number) :Observable<any>{
    return this.http.delete('http://localhost:8083/hms/api/parent/'+id);
  }

  getAllParent():Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/parent');
  }

  getParentById(id:number) :Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/parent/'+id);
  }

}
