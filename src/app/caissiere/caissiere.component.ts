import { Component, OnInit } from '@angular/core';
import { CaissiereService } from '../service/caissiere/caissiere.service';
import { Caissiere } from './Caissiere';

@Component({
  selector: 'app-caissiere',
  templateUrl: './caissiere.component.html',
  styleUrls: ['./caissiere.component.css']
})
export class CaissiereComponent implements OnInit {
doc:Caissiere=new Caissiere();
btn = 'save';
sexes = ['M', 'F']
  constructor(private cs:CaissiereService) { }

  ngOnInit(): void {
  }
onSubmit(){
      this.saveCais();
}
saveCais(){
  this.cs.saveCais(this.doc).subscribe(
    (data)=>{
      alert("Ok Caissiere Bien ajouté");
      console.log(data);
    },error=>{
      alert("Veuillez verifier les données");
    }
  )
}
reset() {
  this.doc.name = null;
  this.doc.prenom = null;
  this.doc.address = null;
  this.doc.email = null;
  this.doc.sexe = null;
  this.doc.datenaissance = null;
  this.doc.phone = null;
}
}
