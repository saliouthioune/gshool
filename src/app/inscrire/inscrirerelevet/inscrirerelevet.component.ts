import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from 'src/app/service/classe/classe.service';
import { InscriptionService } from 'src/app/service/inscription/inscription.service';

@Component({
  selector: 'app-inscrirerelevet',
  templateUrl: './inscrirerelevet.component.html',
  styleUrls: ['./inscrirerelevet.component.css']
})
export class InscrirerelevetComponent implements OnInit {

  p:any;
  c:any;
  liste:any[];
  listei:any[];
    constructor(private cs:ClasseService,private router:Router,private route:ActivatedRoute,private is:InscriptionService) { }
  
    ngOnInit(): void {
      this.route.queryParams.subscribe(
        params=>{
      this.c =params['nomclasse'];
      this.p =params['promo'];
        }
      );
      this.getAllCLasseInscrire();
      this.getAllInscrire();
    }
    getAllInscrire(){
      this.is.getListeInscrire().subscribe(
        (data)=>{
          this.listei=data;
        }
      )
    }
  getAllCLasseInscrire(){
    this.cs.getAllInscrireClasse(this.p,this.c).subscribe(
      (data)=>{
        this.liste=data;
      }
    )
  }
  gotoaddnote(){
    this.router.navigate(['note']);
  }

}
