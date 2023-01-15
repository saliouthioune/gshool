import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Classe } from '../classe/Classe';
import { Professeur } from '../prof/prof';
import { ClasseService } from '../service/classe/classe.service';
import { CourService } from '../service/cour/cour.service';
import { MatiereService } from '../service/matiere/matiere.service';
import { ProfService } from '../service/prof/prof.service';
import { SalleService } from '../service/salle/salle.service';
import { SemestreService } from '../service/semestre/semestre.service';
import { Cour } from './cour';
import { SimpleCourDTO } from './SimpleCourDTO';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent implements OnInit {
  btn='save'
ins:Cour=new Cour();
  constructor(private cs:CourService,private router:Router,private http:HttpClient,
    private ps:ProfService,private css:ClasseService,private ss:SemestreService,private ms:MatiereService
  ,private salS:SalleService) { }
  profs:any[];
  clas:any[];
  sems:any[];
  mats:any[];
  salles:any[];
  
  ngOnInit(): void {
    this.getProfs();
    this.getClas();
    this.getSemestre();
    this.getMatiere();
    this.getSalles();
  }
  onSubmit(){
    this.saveInscrire1();
  }
  listeCourclasse(){
    
  }
  saveInscrire1(){
   /* var hd = document.getElementById('hdebut').innerText;
      var hf = document.getElementById('hfin').innerText;
      var t1=parseFloat(hd);
      var t2=parseFloat(hf);*/
    this.cs.addCour(this.ins).subscribe(
      (data)=>{
        if(data){
       alert('ok cour ajouté')
      this.gotolisteCour();
        }else{
          alert("Veuillez vérifier les heures:Heure fin doit superieur a l'heure de debut")
        }
      }
    )
  }
  getSalles(){
    this.salS.getAllSalle().subscribe(
      (data)=>{
        this.salles=data;
      }
    )
  }
  getProfs(){
    this.ps.getAllProf().subscribe(
      (data)=>{
        this.profs=data;
      }
    )
  }
  getClas(){
    this.css.getAllClass().subscribe(
      (data)=>{
        this.clas=data;
      }
    )
  }
  getSemestre(){
    this.ss.listeaddSemestre().subscribe(
      (data)=>{
        this.sems=data;
      }
    )
  }
  getMatiere(){
    this.ms.listMatier().subscribe(
      (data)=>{
        this.mats=data;
      }
    )
  }
  gotolisteCour(){
    this.router.navigate(['listecour']);
  }
  
}
