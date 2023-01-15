import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SemestreService } from 'src/app/service/semestre/semestre.service';

@Component({
  selector: 'app-note-liste',
  templateUrl: './note-liste.component.html',
  styleUrls: ['./note-liste.component.css']
})
export class NoteListeComponent implements OnInit {

  constructor(private ss:SemestreService,private router:Router) { }

  ins:any[];
  ngOnInit(): void {
    this.getListeInscrire();
  }
  getListeInscrire(){
    this.ss.listeNote().subscribe(
      (data)=>{
        this.ins=data;
      }
    )
  }
  
  gotoaddCour(){
    this.router.navigate(['note']);
  }

}
