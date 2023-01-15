import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnneesComponent } from './annees/annees.component';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantdComponent } from './etudiantd/etudiantd.component';
import { FactureComponent } from './facture/facture.component';
import { IndexComponent } from './index/index.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './menu/about-us/about-us.component';
import { ContacUsComponent } from './menu/contac-us/contac-us.component';
import { HomeComponent } from './menu/home/home.component';
import { PaiementListComponent } from './paiement/paiement-list/paiement-list.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ProfListComponent } from './prof/prof-list/prof-list.component';
import { ProfComponent } from './prof/prof.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BatimentListComponent } from './batiment/batiment-list/batiment-list.component';
import { BatimentComponent } from './batiment/batiment.component';
import { SalleListComponent } from './salle/salle-list/salle-list.component';
import { SalleComponent } from './salle/salle.component';
import { ClasseListComponent } from './classe/classe-list/classe-list.component';
import { ClasseComponent } from './classe/classe.component';
import { EtudiantpComponent } from './etudiantp/etudiantp.component';
import { InscrireListComponent } from './inscrire/inscrire-list/inscrire-list.component';
import { CourComponent } from './cour/cour.component';
import { ListCourComponent } from './cour/list-cour/list-cour.component';
import { MatiereListeComponent } from './matiere/matiere-liste/matiere-liste.component';
import { MatiereComponent } from './matiere/matiere.component';
import { SemestreComponent } from './semestre/semestre.component';
import { SemestreListeComponent } from './semestre/semestre-liste/semestre-liste.component';
import { NoteListeComponent } from './note/note-liste/note-liste.component';
import { NoteComponent } from './note/note.component';
import { RelevetComponent } from './relevet/relevet.component';
import { ModepComponent } from './modep/modep.component';
import { NumerotelComponent } from './modep/numerotel/numerotel.component';
import { CodevalidationComponent } from './modep/codevalidation/codevalidation.component';
import { DirecteurComponent } from './directeur/directeur.component';
import { NumcbqComponent } from './modep/numcbq/numcbq.component';
import { LiclasseComponent } from './inscrire/liclasse/liclasse.component';
import { ClasseiComponent } from './inscrire/classei/classei.component';
import { LcclassComponent } from './cour/lcclass/lcclass.component';
import { CprofComponent } from './prof/cprof/cprof.component';
import { SenteComponent } from './sente/sente.component';
import { CaissiereComponent } from './caissiere/caissiere.component';
import { MailinscriptionComponent } from './mailinscription/mailinscription.component';
import { LipaiementComponent } from './inscrire/lipaiement/lipaiement.component';
import { PaiementeiComponent } from './inscrire/paiementei/paiementei.component';
import { ReleveteiComponent } from './inscrire/relevetei/relevetei.component';
import { InscrirerelevetComponent } from './inscrire/inscrirerelevet/inscrirerelevet.component';
import { AnneesListComponent } from './annees/annees-list/annees-list.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  //{ path: 'login', component: LoginComponent},
  { path: 'index', component: IndexComponent},

  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'contact', component:ContacUsComponent},
  {path:'sign-up',component:SignUpComponent},
  { path: 'etudiant' , component: EtudiantComponent},
  { path: 'etudiantList' , component: EtudiantListComponent},
  { path: 'etudiantUpdate/:id' , component: EtudiantComponent},
  { path: 'etudiantDetail/:id' , component: EtudiantComponent},
  {path:'annee',component:AnneesComponent},
  {path:'anneeliste',component:AnneesListComponent},
  {path:'paiement',component:PaiementComponent},
  {path:'paiementList',component:PaiementListComponent},
  {path:'paiementUpdate/:id',component:PaiementComponent},
  {path:'facture',component:FactureComponent},
  {path:'inscrire',component:InscrireComponent},
  {path:'inscrire/:id',component:InscrireComponent},
  {path:'prof',component:ProfComponent},
  {path:'profUpdate/:id',component:ProfComponent},
  {path:'profList',component:ProfListComponent},
  {path:'etudiantd',component:EtudiantdComponent},
  {path:'batiment',component:BatimentComponent},
  {path:'batiment/:id',component:BatimentComponent},
  {path:'batimentliste',component:BatimentListComponent},
  {path:'salleliste',component:SalleListComponent},
  {path:'salle',component:SalleComponent},
  {path:'salle/:id',component:SalleComponent},
  {path:'classList',component:ClasseListComponent},
  {path:'classUpdate/:id',component:ClasseComponent},
  {path:'class',component:ClasseComponent},
  {path:'etudiantp',component:EtudiantpComponent},
  {path:'inscrirel',component:InscrireListComponent},
  {path:'listecour',component:ListCourComponent},
  {path:'cour',component:CourComponent},
  {path:'listematiere',component:MatiereListeComponent},
  {path:'matiere',component:MatiereComponent},
  {path:'semestre',component:SemestreComponent},
  {path:'listesemestre',component:SemestreListeComponent},
  {path:'listenote',component:NoteListeComponent},
  {path:'note',component:NoteComponent},
  {path:'relevet',component:RelevetComponent},
  {path:'modep',component:ModepComponent},
  {path:'numero',component:NumerotelComponent},
  {path:'code/:numero',component:CodevalidationComponent},
  {path:'directeur',component:DirecteurComponent},
  {path:'numcbq',component:NumcbqComponent},
  {path:'liclasse',component:LiclasseComponent},
  {path:'classei',component:ClasseiComponent},
  {path:'lcclasse/:id',component:LcclassComponent},
  {path:'cprof/:id',component:CprofComponent},
  {path:'sentm',component:SenteComponent},
  {path:'caissiere',component:CaissiereComponent},
  {path:'mailins/:id',component:MailinscriptionComponent},
  {path:'lipaiement',component:LipaiementComponent},
  {path:'paiementei',component:PaiementeiComponent},
  {path:'relevetei',component:ReleveteiComponent},
  {path:'lirelevet',component:InscrirerelevetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
