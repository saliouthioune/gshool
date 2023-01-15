import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasseService } from 'src/app/service/classe/classe.service';
import { CourService } from 'src/app/service/cour/cour.service';
import { InscriptionService } from 'src/app/service/inscription/inscription.service';
import * as jspdf from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-lcclass',
  templateUrl: './lcclass.component.html',
  styleUrls: ['./lcclass.component.css']
})
export class LcclassComponent implements OnInit {
iss=[];
css=[];
classe=[];
id:any;
  constructor(private route:ActivatedRoute,private is:InscriptionService,private cs:CourService,private cls:ClasseService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getAllClasse();
    this.getAllCour();
    this.getAllClasses()
  }
getAllClasse(){
  this.is.getListeInscrire().subscribe(
    (data)=>{
      this.iss=data;
    }
  )
}
getAllClasses(){
  this.cls.getAllClass().subscribe(
    (data)=>{
      this.classe=data;
    }
  )
}
getAllCour(){
  this.cs.getListeCours().subscribe(
    (data)=>{
      this.css=data;
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
