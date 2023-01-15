import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalleService } from 'src/app/service/salle/salle.service';
import { Salle } from '../Salle';

@Component({
  selector: 'app-salle-list',
  templateUrl: './salle-list.component.html',
  styleUrls: ['./salle-list.component.css']
})
export class SalleListComponent implements OnInit {

  constructor(private ss:SalleService,private router:Router) { }
 salleliste:Salle[];
  ngOnInit(){
    this.getAlleSallle();
  }
  getAlleSallle(){
    this.ss.getAllSalle().subscribe(
      (data)=>{
        this.salleliste=data;
      }
    )
  }
  deleteSalle(id:number){
    if(window.confirm('Etes vous sure de vouloir supprimer cette salle'))
    {
   this.ss.deleteSalle(id).subscribe(
     data=>{
       console.log(data);
       //pour que le tableau s'actualise automatiquement apres la suppression
       this.getAlleSallle();
     },error=>{
       alert("Impossible de supprimer cette salle");
     }
   )
    }
  }
  gotoSalle(){
    this.router.navigate(['salle']);
  }
  gotoUpdateSalle(id:number){
    this.router.navigate(['salle',id]);
  }
}
