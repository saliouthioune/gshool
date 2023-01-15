import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasseService } from 'src/app/service/classe/classe.service';
import { CourService } from 'src/app/service/cour/cour.service';
import { ProfService } from 'src/app/service/prof/prof.service';
import * as jspdf from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-cprof',
  templateUrl: './cprof.component.html',
  styleUrls: ['./cprof.component.css']
})
export class CprofComponent implements OnInit {
 id:any;
 css=[];
 profs=[];
 classes=[];
  constructor(private route:ActivatedRoute,private ps:ProfService,private cs:CourService,private ccs:ClasseService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getAllCours();
    this.getAllClasses();
    this.getAllProfs();
  }
 getAllCours(){
   this.cs.getListeCours().subscribe(
     (data)=>{
       this.css=data;
     }
   )
 }
 getAllProfs(){
  this.ps.getAllProf().subscribe(
    (data)=>{
      this.profs=data;
    }
  )
}
getAllClasses(){
  this.ccs.getAllClass().subscribe(
    (data)=>{
      this.classes=data;
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
    doc.save('emploisdutemps.pdf');
  });
}
}
