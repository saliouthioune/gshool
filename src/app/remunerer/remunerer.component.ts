import { Component, OnInit } from '@angular/core';
import { CourService } from '../service/cour/cour.service';
import { Remunerer } from './Remunerer';

@Component({
  selector: 'app-remunerer',
  templateUrl: './remunerer.component.html',
  styleUrls: ['./remunerer.component.css']
})
export class RemunererComponent implements OnInit {
  btn="Valider";
 doc:Remunerer=new Remunerer();
 moiss=['Octobre','Novembre','Decembre','janvier','Fevrier','mars','avril','Mai','Juin','Juillet'];
  constructor(private cs:CourService) {}

  ngOnInit(): void {
  }
  onSubmit(){
    this.addRemunerer();
  }
addRemunerer(){
  this.cs.addRemunerer(this.doc).subscribe(
    (data)=>{
      alert("Ok vous venez de paiement cet enseignant");
    },error=>{
      alert("Veuillez verifier les informations saisient");
    }
  )
}
}
