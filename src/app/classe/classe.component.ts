import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../etudiant/Etudiant';
import { ClasseService } from '../service/classe/classe.service';
import { EtudiantService } from '../service/etudiant/etudiant.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Classe } from './Classe';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {
  btn='save';
  cd:Classe=new Classe();
  etudiants:Etudiant[];
  id;
  constructor(private router:Router,private route:ActivatedRoute,private es:EtudiantService
    ,private cs:ClasseService,private tss:TokenStorageService) { }

  ngOnInit(): void {
    if (this.tss.getToken()) {
      if (this.route.snapshot.params['id'] > 0) {
        this.btn = 'Update';
        this.id = this.route.snapshot.params['id'];
        this.getClass();
      }
      this.getAllEtudiant();
    } else {
      this.router.navigate(['login']);
    }
  }
  onSubmit(){
    if (this.id > 0) {
      this.update();
    } else {
      this.save();
      console.log(this.cd);
      
    }
  }
  getClass(){
    this.cs.getClassById(this.id).subscribe((data) => {
      this.cd = data;
    },
      error => {
        console.log(error);
      });
  }
  update() {
    this.cs.updateClass(this.id, this.cd).subscribe((data) => {
      console.log(data);
      alert("Doctor updated successfully");
      this.gotoNext();
    },
      error => {
        console.log(error);
        alert("can't update your data");
      });
  }
  save() {
    this.cs.addClass(this.cd).subscribe((data) => {
      console.log(data);
      alert("Classe added successfully");
      this.gotoNext();
    },
      error => {
        console.log(error);
        alert('can not save your data');
      });
  }
  gotoNext() {
    this.router.navigate(['classList']);
  }
getAllEtudiant(){
 this.es.getAllEtudiantsd().subscribe(
   (data)=>{
     this.etudiants=data;
   }
 )
}
reset(){
  this.cd.nom=null;
  
}
}
