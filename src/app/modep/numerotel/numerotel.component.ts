import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numerotel',
  templateUrl: './numerotel.component.html',
  styleUrls: ['./numerotel.component.css']
})
export class NumerotelComponent implements OnInit {
btn='Save';
numero:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
this.gotocode();
}
gotocode(){
  this.router.navigate(['code',this.numero]);
}
}
