import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalleService } from 'src/app/service/salle/salle.service';
import { Batiment } from '../Batiment';

@Component({
  selector: 'app-batiment-list',
  templateUrl: './batiment-list.component.html',
  styleUrls: ['./batiment-list.component.css']
})
export class BatimentListComponent implements OnInit {
batimentliste:Batiment[];
  constructor(private ss:SalleService,private router:Router) { }

  ngOnInit(){
    this.getAlleBatiment();
  }
  getAlleBatiment(){
    this.ss.getAllBatiment().subscribe(
      (data)=>{
        this.batimentliste=data;
      }
    )
  }
  deleteBatiment(id:number){
    if(window.confirm('Etes vous sure de vouloir supprimer ce batiment'))
    {
   this.ss.deleteBatiment(id).subscribe(
     data=>{
       console.log(data);
       //pour que le tableau s'actualise automatiquement apres la suppression
       this.getAlleBatiment();
     },error=>{
       alert("Impossible de supprimer ce batiment");
     }
   )
    }
  }
  gotoBatiment(){
    this.router.navigate(['batiment']);
  }
  gotoUpdateBatiment(id:number){
    this.router.navigate(['batiment',id]);
  }

}
