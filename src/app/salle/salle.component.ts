import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalleService } from '../service/salle/salle.service';
import { Salle } from './Salle';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  btn='Save';
 salle:Salle=new Salle();
 id;
  constructor(private ss:SalleService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']>0){
      this.btn='Update';
    this.id=this.route.snapshot.params['id'];
    this.getSalleById();
    }
  }
  getSalleById(){
    this.ss.getSalleById(this.id).subscribe(
      data=>{
        console.log(data);
        this.salle=data;
      }
    )
  }
saveSalle(){
  this.ss.addSalle(this.salle).subscribe(
    data=>{
      console.log(data);
      alert('Ok! Salle bien ajouté');
      this.gotoSalleList()
    },error=>{
      alert('Erreur sur les données');

    });
}
updateProf(){
  this.ss.updateSalle(this.id,this.salle).subscribe(
    data=>{
      console.log(data);
      
      alert('Salle Modifié avec succes');
      this.gotoSalleList()
      
    },error=>{
      alert('Vous ne pouver pas modifier les information du prof');
    }
    
  )
}
onSubmit(){
  if(this.id>0){
    this.updateProf();
  }else{
    this.saveSalle();
  }
}
gotoSalleList(){
  this.router.navigate(['salleliste']);
}
}
