import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleNoteDTO } from 'src/app/note/SimpleNoteDTO';


@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  constructor(private http:HttpClient) { }
  addSemestre(is:any):Observable<any>{
     return this.http.post<any>('http://localhost:8083/hms/api/semestre',is);
  }
  listeaddSemestre():Observable<any>{
    return this.http.get<any[]>('http://localhost:8083/hms/api/semestres');
 }
 addNote(is:any):Observable<any>{
  return this.http.post<any>('http://localhost:8083/hms/api/addnote',is);
}
listeNote():Observable<any[]>{
  return this.http.get<any[]>('http://localhost:8083/hms/api/notes');
}
getSemestreById(id:number):Observable<any>{
  return  this.http.get('http://localhost:8083/hms/api/semestre/'+id);
}
}
