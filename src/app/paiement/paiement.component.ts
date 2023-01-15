import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnneAcad } from '../annees/Annee'; 
import { Etudiant } from '../etudiant/Etudiant';
import { AnneesService } from '../service/annees/annees.service';
import { EtudiantService } from '../service/etudiant/etudiant.service';
import { InscriptionService } from '../service/inscription/inscription.service';
import { PaiementService } from '../service/paiement/paiement.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Paiement } from './Paiement';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  btn = 'save';
  typee='Check';
  doc: Paiement = new Paiement();
  etudiantList:any[];
  anneeList:AnneAcad[];
  id;
  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];
  nom:any;
  prenom:any;
  sexe:any;
  phone:any;
  address:any;
  email:any;
  idetudiant:any;
  listeinscrit:any[];
  moiss=['Octobre','Novembre','Decembre','janvier','Fevrier','mars','avril','Mai','Juin','Juillet']
  constructor(private router: Router, private ps: PaiementService, private renderer: Renderer2
    ,private tss: TokenStorageService, private es: EtudiantService, private route: ActivatedRoute,private is:InscriptionService) { }

  ngOnInit(){
    this.route.queryParams.subscribe(
      params=>{
    this.nom =params['nom'];
    this.prenom =params['prenom'];
    this.email =params['email'];
    this.address =params['address'];
    this.phone=params['phone'];
    this.sexe=params['sexe'];
    this.idetudiant =params['idetudiant'];
      }
    );
    this.getEtudiant();
    this.chargement();
    this.listeInscrire();
    
  }

  getEtudiant() {
    this.ps.getAllEleve().subscribe(
      list=>{
        this.etudiantList = list;
      });
  }
  chargement(){
    this.doc.name=this.nom;
    this.doc.prenom=this.prenom;
    this.doc.email=this.email;
    this.doc.phone=this.phone;
    this.doc.address=this.address;
    this.doc.sexe=this.sexe;
    this.doc.etudiant.id=this.idetudiant;
  }
  onSubmit() {
    this.save();
  }
  listeInscrire(){
    this.is.getListeInscrire().subscribe(
      (data)=>{
        this.listeinscrit=data;
      }
    )
  }
  save() {
    this.ps.addPaiement(this.doc)
      .subscribe((data) => {
        console.log(data);
        alert('Paiement Added successfully');
        this.gotoNext();
      },
        error => {
          console.log(error);
          alert('can not save your data');
        })
  }
  check() {
    this.ps.checkIsAvailable(this.doc)
      .subscribe(res => {
        console.log(res.available);
        if (!res.available) {
          this.save();
        } else {
          alert("vous venez d'effectuer le paiement de ce mois pour cet etudiant");
        }
      },
        error => console.log(error));
  }
  gotoNext() {
    this.router.navigate(['paiementList']);
  }
}
