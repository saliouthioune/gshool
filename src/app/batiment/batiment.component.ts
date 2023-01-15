import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle } from '../salle/Salle';
import { SalleService } from '../service/salle/salle.service';
import { Batiment } from './Batiment';

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.css']
})
export class BatimentComponent implements OnInit {
  btn='Save';
 bat:Batiment=new Batiment();
 id;
 salles:Salle[];
  constructor(private ss:SalleService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']>0){
      this.btn='Update';
    this.id=this.route.snapshot.params['id'];
    this.getSalleById();
    }
    this.getAllSalle();
  }
  getAllSalle(){
  this.ss.getAllSalle().subscribe(
    data=>{
      this.salles=data;
      console.log(data);
    }
  )
  }
  getSalleById(){
    this.ss.getBatimentById(this.id).subscribe(
      data=>{
        console.log(data);
        this.bat=data;
      }
    )
  }
saveBatiment(){
  this.ss.addBatiment(this.bat).subscribe(
    data=>{
      console.log(data);
      alert('Ok! Salle bien ajouté');
      this.gotoBatimentList()
    },error=>{
      alert('Erreur sur les données');

    });
}
updateBatiment(){
  this.ss.updateBatiment(this.id,this.bat).subscribe(
    data=>{
      console.log(data);
      
      alert('Salle Modifié avec succes');
      this.gotoBatimentList()
      
    },error=>{
      alert('Vous ne pouver pas modifier les information du prof');
    }
    
  )
}
onSubmit(){
  if(this.id>0){
    this.updateBatiment();
  }else{
    this.saveBatiment();
  }
}
gotoBatimentList(){
  this.router.navigate(['batimentliste']);
}

}
