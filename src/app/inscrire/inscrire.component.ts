import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Etudiant } from '../etudiant/Etudiant';
import { AnneesService } from '../service/annees/annees.service';
import { EtudiantService } from '../service/etudiant/etudiant.service';
import { Inscrire } from './Inscrire';
import { forkJoin } from 'rxjs';
import { InscriptionService } from '../service/inscription/inscription.service';
import { SimpleInscrireDTO } from './SimpleInscrireDTO';
import { ClasseService } from '../service/classe/classe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AnneAcad } from '../annees/Annee';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  btn='save';
 public anins=2021-2022;
  ins:Inscrire=new Inscrire()
  etudiants:any[];
  classe:any[];
  eleve:any;
  currenti:any;
  id:any;
  e:Etudiant=new Etudiant();
  promos:any[];
  //etudiantId:number;
  //anneeId:number;
  //inscrire:any=new Inscrire();
  //i:Inscrire=new Inscrire();
  constructor(private es:EtudiantService,private cs:ClasseService,
    private is:InscriptionService,private route:ActivatedRoute,private router:Router,private as:AnneesService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getEtudiant();
    this.getAllClasse();
    this.getEleveBydId();
    this.yearliste();
   
    
  }
  getEleveBydId(){
    this.es.getDoctorById(this.id).subscribe(
      (data)=>{
        this.e=data;
        this.ins.etudiant.name=this.e.name;
        this.ins.etudiant.prenom=this.e.prenom;
        this.ins.etudiant.email=this.e.email;
        this.ins.etudiant.id=this.e.id;
        this.ins.etudiant.sexe=this.e.sexe;
        this.ins.etudiant.phone=this.e.phone;
        this.ins.etudiant.address=this.e.address;
      }
    )
  }
  listeEtudiant(){
    this.es.getAllDoctor().subscribe(
       
    )
  }
  yearliste(){
    this.as.listeYear().subscribe(
       (data)=>{
        this.promos=data;
       }
    )
  }
onSubmit(){
  this.saveInscrire();
}
 
saveInscrire(){
    this.is.addToUserCart(this.ins).subscribe(
      (data)=>{
        this.currenti=data;
       alert('ok Inscription reussit')
       this.gotoInscrire(this.currenti.etudiant.id);
      },error=>{
        alert('Erreur')
      }
    )
  }
  getEtudiant() {
    this.es.getAllDoctor().subscribe(
      list=>{
        this.etudiants=list;
      });
  }
  getAllClasse() {
    this.cs.getAllClass().subscribe(
      (list)=>{
        this.classe=list;
      });
  }
  gotoInscrire(idi:any){
    this.router.navigate(['mailins',idi])
  }
}
