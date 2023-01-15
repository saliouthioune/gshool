import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailDTO } from '../paiement/maildto';
import { EmailService } from '../service/email/email.service';
import { EtudiantService } from '../service/etudiant/etudiant.service';

@Component({
  selector: 'app-mailinscription',
  templateUrl: './mailinscription.component.html',
  styleUrls: ['./mailinscription.component.css']
})
export class MailinscriptionComponent implements OnInit {

  id:any;
  ide:any;
  eleve:any;
  idci:any;
  ideci:any;
  ngOnInit(): void {
   // this.id=this.route.snapshot.params['id'];
  this.ide =this.route.snapshot.params['id'];
   
    this.mail.id=this.ide;
    this.getEleve();

  }
  mail :MailDTO = new MailDTO();

  constructor(private emailService :EmailService,private es:EtudiantService,private route:ActivatedRoute) { }
getEleve(){
  
  this.es.getDoctorById(this.ide).subscribe(
    (data)=>{
   this.eleve=data;

    }
  )
}
   enviarEmail() {
    this.emailService.sentEmail(this.mail)
      .subscribe(data => console.log(data));
      alert('Ok données bien transmises');

  }

   onSubmit() {
    this.enviarEmail();
  }

}
