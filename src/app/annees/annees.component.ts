import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnneesService } from '../service/annees/annees.service';
import { AnneAcad } from './Annee';

@Component({
  selector: 'app-annees',
  templateUrl: './annees.component.html',
  styleUrls: ['./annees.component.css']
})
export class AnneesComponent implements OnInit {

  year:AnneAcad=new AnneAcad();
  btn='Save';
    constructor(private as:AnneesService,private router:Router) { }
  
    ngOnInit(): void {
    }
  addNewYear(){
  this.as.addNewYear(this.year).subscribe(
    data=>{
       console.log(data);
       window.alert("Ok vous venez d'ajouter unee nouvelle année");
       this.gatoyearlist();
    }
  )
  }
  onSubmit(){
    this.addNewYear();
  }
  gatoyearlist(){
    this.router.navigate(['anneeliste']);
  }

}
