import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SemestreService } from '../service/semestre/semestre.service';
import { Semestre } from './semestre';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent implements OnInit {
btn='Save';
sem:Semestre=new Semestre();
  constructor(private ss:SemestreService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
   this.save();
  }
 save(){
  this.ss.addSemestre(this.sem).subscribe(
    (data)=>{
      alert("Ok! vous venez d'ajouter un nouveau semestre");
      this.gotolisteSemestre();
    }
  )
 }
 gotolisteSemestre(){
   this.router.navigate(['listesemestre']);
 }
}
