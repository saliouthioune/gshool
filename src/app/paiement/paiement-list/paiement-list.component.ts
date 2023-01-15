import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/service/etudiant/etudiant.service';
import { PaiementService } from 'src/app/service/paiement/paiement.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Paiement } from '../Paiement';

@Component({
  selector: 'app-paiement-list',
  templateUrl: './paiement-list.component.html',
  styleUrls: ['./paiement-list.component.css']
})
export class PaiementListComponent implements OnInit {

  desc: string = '';
  search;
  paiementList: Paiement[];
  eleves:any[];
  nom:string;
  idep:number;
  
  constructor(private route:ActivatedRoute,private router:Router,private ps:PaiementService
    ,private es:EtudiantService,private renderer:Renderer2,private tss:TokenStorageService) { }

    ngOnInit(): void {
      if(this.tss.getToken()){
        this.getList();
      }else{
        this.router.navigate(['login']);
      }
      this.getAllEleleve();
     
    }
    //la lsite des eleves
    getAllEleleve(){
      this.ps.getAllEleve().subscribe(
        data=>{
          this.eleves=data;
          
        }
      )
    }
  getList() {
    this.ps.getAllPaiement().subscribe((list) => {
      this.paiementList = list
      
    },
      error => {
        console.log(error);
      });

  }

  gotoPaiement(){
    this.router.navigate(['paiement']);
  }
  getPaiement(id:number){
     this.router.navigate(['paiementUpdate', id])
  }
  factutePaiement(id:number){
    this.router.navigate(['facture',id])
  }

}
