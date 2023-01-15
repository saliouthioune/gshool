import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailDTO } from '../paiement/maildto';
import { EmailService } from '../service/email/email.service';
import { EtudiantService } from '../service/etudiant/etudiant.service';

@Component({
  selector: 'app-sente',
  templateUrl: './sente.component.html',
  styleUrls: ['./sente.component.css']
})
export class SenteComponent implements OnInit {

  id:any;
  ide:any;
  eleve:any;
  idci:any;
  ideci:any;
  ngOnInit(): void {
    this.idci=this.route.snapshot.params['id'];
    this.ideci=this.route.snapshot.params['id1'];
    this.route.queryParams.subscribe(
      params=>{
        this.id =params['id'];
        this.ide =params['ide'];
      }
 
    );
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
