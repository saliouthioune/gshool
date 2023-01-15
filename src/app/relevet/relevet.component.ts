import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../service/etudiant/etudiant.service';
import { SemestreService } from '../service/semestre/semestre.service';
import { ClasseService } from '../service/classe/classe.service';
import * as jspdf from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NoteService } from '../service/note/note.service';
import { MatiereService } from '../service/matiere/matiere.service';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-relevet',
  templateUrl: './relevet.component.html',
  styleUrls: ['./relevet.component.css']
})
export class RelevetComponent implements OnInit {
  etudiants:any[];
  matieres:any[];
  notes:any[];
   tabs=["Felicitations","Tableau d'honneur'"]
  etu:any;
  classe:any;
  idetudiant:any;
  idclasse:any
  somme:number;
  nbm:any;
  appreciation:any;
  promo:string;
  moyen:number;
  nom;
  nomclass;
  semId:number;
  semestre:any;
  sommecoef:any;
  notess:any[];
  lmatieres:any[];
  constructor(private ns:SemestreService,private route:ActivatedRoute,private es:EtudiantService,
    private cs:ClasseService,private nns:NoteService,private ms:MatiereService) { }

  ngOnInit(): void {
   this.route.queryParams.subscribe(
     params=>{
      this.idetudiant= params['idetudiant'];
      //L'attribut prenom contient "Jean"
      this.idclasse = params['classeId'];
      this.semId = params['semId'];
      this.promo= params['p'];
      this.getEtudiant();
      this.getClasse();
      this.getSemestreById();
      this.getnbMatiere();
      //this.listeMatiere();
     }

   );
   //this.liste();
   this.sommeTotale();
   this.getNotes();
   
  }
  
  /*listeMatiere(){
    this.ms.listMatier().subscribe(
      (data)=>{
        this.lmatieres=data;
        
      }
    )
  }*/
  print(){
    let printContents = document.getElementById("pdf").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }
  getNotes(){
    this.nns.getenotes(this.idetudiant,this.idclasse,this.semId).subscribe(
      (data)=>{
  this.notess=data;
      }
    )
  }
   sommeTotale(){
  this.nns.getesomme(this.idetudiant,this.idclasse,this.semId).subscribe(
    (data)=>{
      this.somme=data;
      this.moyen=this.somme/this.sommecoef;
    }
  );
  }
  getnbMatiere(){
    this.nns.getenombre(this.idetudiant,this.idclasse,this.semId).subscribe(
      (data)=>{
        this.sommecoef=data;
      }
    )
  }
  getEtudiant() {
    this.es.getDoctorById(this.idetudiant).subscribe((data) => {
      this.etu = data;
    },
      error => {
        console.log(error);
      });
  }
  getClasse() {
    this.cs.getClassById(this.idclasse).subscribe((data) => {
      this.classe= data;
    },
      error => {
        console.log(error);
      });
  }
/*liste(){
  this.ns.listeNote().subscribe(
    data=>{
      this.notes=data;
    }
  )
}*/
getSemestreById(){
  this.ns.getSemestreById(this.semId).subscribe(
    (data)=>{
      this.semestre=data;
    }
  )
}
getPDF(){
  html2canvas(document.getElementById('pdf'), {
    // Opciones
    allowTaint: true,
    useCORS: false,
    // Calidad del PDF
    scale: 1
  }).then(function(canvas) {
    var img = canvas.toDataURL("image/png");
    var doc = new jsPDF();
    doc.addImage(img,'PNG',7, 20, 195, 105);
    doc.save('relevet.pdf');
  });
}
}
