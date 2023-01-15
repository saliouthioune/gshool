import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfService } from 'src/app/service/prof/prof.service';
import { Professeur } from '../prof';

@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.css']
})
export class ProfListComponent implements OnInit {
  profs:Professeur[];
  constructor(private router:Router,private profss:ProfService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(){
  this.profss.getAllProf().subscribe(
    data=>{
      this.profs=data;
    }
  )
}
//methode pour la suppression d'un prof
deleteProf(id:number){
  if(window.confirm('Etes vous sure de vouloir supprimer ce prof'))
  {
 this.profss.deleteProf(id).subscribe(
   data=>{
     console.log(data);
     //pour que le tableau s'actualise automatiquement apres la suppression
     this.getAll();
   },error=>{
     alert("Impossible de supprimer ce prof");
   }
 )
  }
}
gotoUpdateProf(id:number){
   this.router.navigate(['profUpdate',id]);
}
gotoProf(){
  this.router.navigate(['prof']);
}
}
