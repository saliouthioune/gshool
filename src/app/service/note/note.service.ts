import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }
  private baseUrl ='http://localhost:8080/hms/api/note';
  private baseUrl1 ='http://localhost:8083/hms/api/somme';
  private baseUrl2 ='http://localhost:8081/hms/api/nombre';
  addNote(niveau:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}`,niveau);
  }

  updateNote(id:number,niveau:any) :Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,niveau);
  }

  deleteNote(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllNote():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getFormationById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  getSommme(etudiantId:number,classId:number,semId) :Observable<any>{
    return this.http.get(`${this.baseUrl1}/${etudiantId}/${classId}/${semId}`)
  }
  getnbMatiere(etudiantId:number,classId:number,semId) :Observable<any>{
    return this.http.get(`${this.baseUrl2}/${etudiantId}/${classId}/${semId}`)
  }
  getAllElevenotes():Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/elevesnotes');
  }
  getenotes(id1:number,id2:number,id3:number):Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/notes/'+id1+'/'+id2+'/'+id3);
  }
  getesomme(id1:number,id2:number,id3:number):Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/sommenc/'+id1+'/'+id2+'/'+id3);
  }
  getenombre(id1:number,id2:number,id3:number):Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/sommec/'+id1+'/'+id2+'/'+id3);
  }
  getesommenfc(id1:number,id2:number,id3:number):Observable<any>{
    return this.http.get('http://localhost:8083/hms/api/sommenfc/'+id1+'/'+id2+'/'+id3);
  }
}
