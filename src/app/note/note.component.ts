import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasseService } from '../service/classe/classe.service';
import { EtudiantService } from '../service/etudiant/etudiant.service';
import { InscriptionService } from '../service/inscription/inscription.service';
import { MatiereService } from '../service/matiere/matiere.service';
import { NoteService } from '../service/note/note.service';
import { SemestreService } from '../service/semestre/semestre.service';
import { Note } from './Note';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
 simn:Note=new Note();
 mats:any[];
 classes:any[];
 semestres:any[];
 etudiantList:any[];
 btn='Save';
 matSlected:any;
 nom:any;
 prenom:any;
 idetudiant:any;
 listeinscrit:any[];
  constructor(private ms:MatiereService,private ss:SemestreService,private es:EtudiantService,
    private cs:ClasseService,private ns:NoteService,private route:ActivatedRoute,private lis:InscriptionService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params=>{
    this.nom =params['nom'];
    this.prenom =params['prenom'];
    this.idetudiant =params['idetudiant'];
      }
    );
    this.listeMatiere();
    this.listeClasse();
    this.listeSemestre();
    this.getEtudiant();
    this.chargement();
    this.listeInscrire();
  }
  chargement(){
    this.simn.name=this.nom;
    this.simn.prenom=this.prenom;
    this.simn.etudiant.id=this.idetudiant;
  }
  valueSlected(event){
    this.matSlected=event.target.value;
  }
  getEtudiant() {
    this.ns.getAllElevenotes().subscribe(
      list=>{
        this.etudiantList = list;
      });
  }
  onSubmit(){
    this.save();
  }
  save(){
    this.ss.addNote(this.simn).subscribe(
      (data)=>{
        alert("Ok! vous avez ajouter une note pour cette matiere");
      },error=>{
        alert("Erreur!");
      }
    )
  }
  listeInscrire(){
    this.lis.getListeInscrire().subscribe(
      (data)=>{
        this.listeinscrit=data;
      }
    )
  }
listeMatiere(){
  this.ms.listMatier().subscribe(
    (data)=>{
      this.mats=data;
    }
  )
}
listeClasse(){
  this.cs.getAllClass().subscribe(
    (data)=>{
      this.classes=data;
    }
  )
}

listeSemestre(){
  this.ss.listeaddSemestre().subscribe(
    (data)=>{
      this.semestres=data;
    }
  )
}
}
