import { Component, OnInit } from '@angular/core';
import { DirecteurService } from '../service/directeur/directeur.service';
import { Directeur } from './directeur';

@Component({
  selector: 'app-directeur',
  templateUrl: './directeur.component.html',
  styleUrls: ['./directeur.component.css']
})
export class DirecteurComponent implements OnInit {
 doc:Directeur=new Directeur();
  constructor(private ds:DirecteurService) { }
btn='Save';
  ngOnInit(): void {
  }
  onSubmit(){
    this.ds.addDirecteur(this.doc).subscribe(
      (data)=>{
       alert("Ok")
      },error=>{
        alert("Erreur");
      }
    )
  }
}
