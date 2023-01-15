import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CaissiereService } from '../service/caissiere/caissiere.service';
import { EtudiantService } from '../service/etudiant/etudiant.service';
import { InscriptionService } from '../service/inscription/inscription.service';
import { ProfService } from '../service/prof/prof.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  myImage:string ="assets/Image/image.jpg";

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showEnseignantBoard=false;
  showEtudiantBoard=false;
  showDirecteurBoard=false;
  showCaissiereBoard=false;
  username: string;
  email:String;
  id:any;
  elevei:any;
  eleve:any;
  cais:any;
  prof:any;
  constructor(private router: Router, 
    private tokenStorageService: TokenStorageService,private renderer:Renderer2,private is:InscriptionService,
    private ps:ProfService,private es:EtudiantService,private cs:CaissiereService){}

  ngOnInit(){
    //this.renderer.setStyle(document.body, 'background-color', '#00BFFF');
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showEnseignantBoard = this.roles.includes('ROLE_ENSEIGNANT');
      this.showEtudiantBoard= this.roles.includes('ROLE_ETUDIANT');
      this.showDirecteurBoard= this.roles.includes('ROLE_DIRECTEUR');
      this.showCaissiereBoard= this.roles.includes('ROLE_CAISSIERE');
      this.username = user.username;
      this.email= user.email;
      this.id=user.id;
      this.getElevelogin();
      this.getEleve();
      this.getCais();
      this.getProf();
    }
    else{
      this.router.navigate(['login']);
    }
  }
 getElevelogin(){
   this.is.getInscriptionById(this.id).subscribe(
     (data)=>{
       this.elevei=data;
     }
   )
 }
 getEleve(){
  this.es.getDoctorById(this.id).subscribe(
    (data)=>{
      this.eleve=data;
    }
  )
}
getProf(){
  this.ps.getProfById(this.id).subscribe(
    (data)=>{
      this.prof=data;
    }
  )
}
getCais(){
  this.cs.getCaisById(this.id).subscribe(
    (data)=>{
      this.cais=data;
    }
  )
}
addcais(){
  this.router.navigate(['caissiere']);
}
 sentmessage(){
  this.router.navigate(['sentm']);
 }
 //liste des cours d'une classes
 listeCourclasse(){
  this.router.navigate(['lcclasse',this.id]);
}
 //liste des cours d'une classes
 listecourprof(){
  this.router.navigate(['cprof',this.id]);
}
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  etudiantList(){
    this.router.navigate(['etudiantList']);
  }
  etudiantNew(){
    this.router.navigate(['etudiant']);
  }
  logout(){
    //window.sessionStorage.clear();
    //window.location.reload();
    this.router.navigate(['']);
    this.tokenStorageService.signOut();
    // window.location.reload();
    }
    
    home(){
      this.router.navigate(['home']);
    }
  
    contact(){
      this.router.navigate(['contact']);
    }
  
    about(){
      this.router.navigate(['about']);
    }
    annee(){
      this.router.navigate(['anneeliste']);
    }
    paiementList(){
      this.router.navigate(['paiementList']);
    }
    inscrire(){
      this.router.navigate(['inscrire']);
    }
    profList(){
      this.router.navigate(['profList'])
    }
    salleList(){
      this.router.navigate(['salleliste']);
    }
    batimentList(){
      this.router.navigate(['batimentliste']);
    }
    classList(){
      this.router.navigate(['classList']);
    }
    inscritList(){
      this.router.navigate(['inscrirel'])
    }
    listeCour(){
      this.router.navigate(['listecour'])
    }
    listeMatiere(){
      this.router.navigate(['listematiere'])
    }
    listeSemestre(){
      this.router.navigate(['listesemestre'])
    }
    listeNote(){
      this.router.navigate(['listenote'])
    }
    gotoclassei(){
      this.router.navigate(['classei'])
    }
    gotopaiementei(){
      this.router.navigate(['paiementei'])
    }
    gotorelevetei(){
      this.router.navigate(['relevetei'])
    }
    gotoModep(){
      this.router.navigate(['modep']);
    }
    gotodirecteur(){
      this.router.navigate(['directeur']);
    }
    gotoaddNote(){
      this.router.navigate(['note']);
    }
}
