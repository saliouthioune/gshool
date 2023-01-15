import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from 'src/app/service/classe/classe.service';
import { InscriptionService } from 'src/app/service/inscription/inscription.service';

@Component({
  selector: 'app-relevetei',
  templateUrl: './relevetei.component.html',
  styleUrls: ['./relevetei.component.css']
})
export class ReleveteiComponent implements OnInit {

  constructor(private is:InscriptionService,private router:Router,private cs:ClasseService) { }
 
  ins:any[];
  classes:any[];
  semId:number;
  nomclasse:any;promo:any;
   ngOnInit(): void {
     this.getListeInscrire();
     this.getClasse();
   }
   getListeInscrire(){
     this.is.getListeInscrire().subscribe(
       (data)=>{
         this.ins=data;
       }
     )
   }
   getClasse(){
     this.cs.getAllClass().subscribe(
       (data)=>{
         this.classes=data;
       }
     )
   }
   gotorelevet(id:number){
     return this.router.navigate(['relevet',id])
   }
   gotoliclasse(){
     return this.router.navigate(['liclasse'])
   }

}
