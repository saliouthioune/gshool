import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../etudiant/Etudiant';
import { Paiement } from '../paiement/Paiement';
import { EtudiantService } from '../service/etudiant/etudiant.service';
import { PaiementService } from '../service/paiement/paiement.service';
import { TokenStorageService } from '../service/token-storage.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  id:number;
  nom:string;
  prenom:string;
 paiement=new Paiement();
 etudiant:Etudiant[];
 e=new Etudiant();
 ide:any;
  constructor(private route:ActivatedRoute,private es:EtudiantService
    ,private ts:TokenStorageService,private router:Router,private ps:PaiementService) { }
    ngOnInit(): void {
      this.route.queryParams.subscribe(
        params=>{
          this.id =params['id'];
          this.ide =params['ide'];
        }
   
      );
     // this.id = this.route.snapshot.params['id'];
      //this.ide = this.route.snapshot.params['ide'];
      this.ps.getPaiementById(this.id).subscribe(
        (data)=>{
          this.paiement=data;
          
        }
      );
      this.getEtudiantById();
      
      //this.getEtudiantAll();
  }
  getEtudiantById(){
    this.es.getDoctorById(this.ide).subscribe(
      (data)=>{
        this.e=data;
      }
    );
  }
  getEtudiantAll(){
    this.es.getAllDoctor().subscribe(
      (data)=>{
        this.etudiant=data;
        for(let et of this.etudiant){
          if(et.id==this.ide){
            this.nom=et.name;
            this.prenom=et.prenom;
          }
        }
      }
    )
  }
getPDF(){
  var element = document.getElementById('pdf');
    
   html2canvas(element).then((canvas) => {
      console.log(canvas);

    var iData = canvas.toDataURL('image/png');

     var doc = new jspdf.jsPDF();
      var iHeight = canvas.height * 208 / canvas.width;
      doc.addImage(iData, 0, 0, 208,iHeight);
      doc.save('paiement.pdf')

     })
}

}
