import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/service/inscription/inscription.service';
import { Inscrire } from '../Inscrire';

@Component({
  selector: 'app-inscrire-list',
  templateUrl: './inscrire-list.component.html',
  styleUrls: ['./inscrire-list.component.css']
})
export class InscrireListComponent implements OnInit {

  constructor(private is:InscriptionService,private router:Router) { }
 
 ins:any[];
 semId:number;
 nomclasse:any;promo:any;
  ngOnInit(): void {
    this.getListeInscrire();
  }
  getListeInscrire(){
    this.is.getListeInscrire().subscribe(
      (data)=>{
        this.ins=data;
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
