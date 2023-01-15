import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfService } from '../service/prof/prof.service';
import { Professeur } from './prof';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
  btn='Save';
  sexes=['M','F'];
  prof:Professeur=new Professeur();
  id;
  constructor(private router:Router,private profs:ProfService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']>0){
      this.btn='Update';
    this.id=this.route.snapshot.params['id'];
    this.getProfById();
    }
  }
  getProfById(){
    this.profs.getProfById(this.id).subscribe(
      data=>{
        console.log(data);
        this.prof=data;
      }
    )
  }
save(){
  this.profs.saveProf(this.prof).subscribe(
    data=>{
      console.log(data);
      alert('Ok! prof bien ajouté');
      this.gotoProfList();
    },error=>{
      alert('Erreur sur les données');

    }
  )
}
updateProf(){
  this.profs.updateProf(this.id,this.prof).subscribe(
    data=>{
      console.log(data);
      
      alert('Prof Modifié avec succes');

      this.gotoProfList()
    },error=>{
      alert('Vous ne pouver pas modifier les information du prof');
    }
    
  )
}
onSubmit(){
  if(this.id>0){
    this.updateProf();
  }else{
    this.save();
  }
}

reset(){
  this.prof.nom=null
}
gotoProfList(){
  this.router.navigate(['profList']);
}
}
