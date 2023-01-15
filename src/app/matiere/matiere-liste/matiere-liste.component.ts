import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereService } from 'src/app/service/matiere/matiere.service';
import { Matiere } from '../Matiere';

@Component({
  selector: 'app-matiere-liste',
  templateUrl: './matiere-liste.component.html',
  styleUrls: ['./matiere-liste.component.css']
})
export class MatiereListeComponent implements OnInit {
mats:Matiere[];
  constructor(private ms:MatiereService,private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(){
  this.ms.listMatier().subscribe(
    (data)=>{
      this.mats=data;
    }
  )
}
gotoMatiere(){
  return this.router.navigate(['matiere']);
}
}
