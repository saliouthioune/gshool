import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { EtudiantDetailsComponent } from './etudiant/etudiant-details/etudiant-details.component';
import { HomeComponent } from './menu/home/home.component';
import { ContacUsComponent } from './menu/contac-us/contac-us.component';
import { AboutUsComponent } from './menu/about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EtudiantPipe } from './filter/etudiant/etudiant.pipe';
import { AnneesComponent } from './annees/annees.component';
import { PaiementComponent } from './paiement/paiement.component';
import { PaiementListComponent } from './paiement/paiement-list/paiement-list.component';
import { FactureComponent } from './facture/facture.component';
import { PaiementPipe } from './filter/paiement/paiement.pipe';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ProfComponent } from './prof/prof.component';
import { ProfListComponent } from './prof/prof-list/prof-list.component';
import { EtudiantdComponent } from './etudiantd/etudiantd.component';
import { SalleComponent } from './salle/salle.component';
import { IndexComponent } from './index/index.component';
import { BatimentComponent } from './batiment/batiment.component';
import { BatimentListComponent } from './batiment/batiment-list/batiment-list.component';
import { SalleListComponent } from './salle/salle-list/salle-list.component';
import { ClasseComponent } from './classe/classe.component';
import { ClasseListComponent } from './classe/classe-list/classe-list.component';
import { EtudiantpComponent } from './etudiantp/etudiantp.component';
import { InscrireListComponent } from './inscrire/inscrire-list/inscrire-list.component';
import { CourComponent } from './cour/cour.component';
import { ListCourComponent } from './cour/list-cour/list-cour.component';
import { MatiereComponent } from './matiere/matiere.component';
import { SemestreComponent } from './semestre/semestre.component';
import { SemestreListeComponent } from './semestre/semestre-liste/semestre-liste.component';
import { MatiereListeComponent } from './matiere/matiere-liste/matiere-liste.component';
import { NoteComponent } from './note/note.component';
import { NoteListeComponent } from './note/note-liste/note-liste.component';
import { RelevetComponent } from './relevet/relevet.component';
import { ModepComponent } from './modep/modep.component';
import { NumerotelComponent } from './modep/numerotel/numerotel.component';
import { CodevalidationComponent } from './modep/codevalidation/codevalidation.component';
import { DirecteurComponent } from './directeur/directeur.component';
import { NumcbqComponent } from './modep/numcbq/numcbq.component';
import { RemunererComponent } from './remunerer/remunerer.component';
import { LiclasseComponent } from './inscrire/liclasse/liclasse.component';
import { ClasseiComponent } from './inscrire/classei/classei.component';
import { LcclassComponent } from './cour/lcclass/lcclass.component';
import { CprofComponent } from './prof/cprof/cprof.component';
import { SenteComponent } from './sente/sente.component';
import { CaissiereComponent } from './caissiere/caissiere.component';
import { MailinscriptionComponent } from './mailinscription/mailinscription.component';
import { LipaiementComponent } from './inscrire/lipaiement/lipaiement.component';
import { PaiementeiComponent } from './inscrire/paiementei/paiementei.component';
import { InscrirerelevetComponent } from './inscrire/inscrirerelevet/inscrirerelevet.component';
import { ReleveteiComponent } from './inscrire/relevetei/relevetei.component';
import { AnneesListComponent } from './annees/annees-list/annees-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EtudiantListComponent,
    EtudiantDetailsComponent,
    IndexComponent,
    HomeComponent,
    ContacUsComponent,
    AboutUsComponent,
    LoginComponent,
    SignUpComponent,
    EtudiantPipe,
    AnneesComponent,
    PaiementComponent,
    PaiementListComponent,
    FactureComponent,
    PaiementPipe,
    InscrireComponent,
    ProfComponent,
    ProfListComponent,
    EtudiantdComponent,
    SalleComponent,
    SalleListComponent,
    BatimentComponent,
    BatimentListComponent,
    ClasseComponent,
    ClasseListComponent,
    EtudiantpComponent,
    InscrireListComponent,
    CourComponent,
    ListCourComponent,
    MatiereComponent,
    SemestreComponent,
    SemestreListeComponent,
    MatiereListeComponent,
    NoteComponent,
    NoteListeComponent,
    RelevetComponent,
    ModepComponent,
    NumerotelComponent,
    CodevalidationComponent,
    DirecteurComponent,
    NumcbqComponent,
    RemunererComponent,
    LiclasseComponent,
    ClasseiComponent,
    LcclassComponent,
    CprofComponent,
    SenteComponent,
    CaissiereComponent,
    MailinscriptionComponent,
    LipaiementComponent,
    PaiementeiComponent,
    InscrirerelevetComponent,
    ReleveteiComponent,
    AnneesListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent,IndexComponent]
})
export class AppModule { }
