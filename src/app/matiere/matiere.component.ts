import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereService } from '../service/matiere/matiere.service';
import { Matiere } from './Matiere';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
btn='Save';
 mat:Matiere=new Matiere();
  constructor(private ms:MatiereService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.save();
  }
 save(){
  this.ms.addMatier(this.mat).subscribe(
    (data)=>{
      alert("Ok! vous venez d'ajouter une nouvelle matiere");
      this.gotoListeMatiere();
    },error=>{
      alert("Erreur! veuillez vérifier les informations renseignées");
    }
  )
 }
gotoListeMatiere(){
   return this.router.navigate(['listematiere']);
 }
}
