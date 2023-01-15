import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modep',
  templateUrl: './modep.component.html',
  styleUrls: ['./modep.component.css']
})
export class ModepComponent implements OnInit {
  moiss=['Orange Money','Paypal','Ecobank'];
  constructor(private router:Router) { }
btn='Choisir';
modeSelected:string;
modifedtext:string;
  ngOnInit(): void {
    this.modeSelected='Paypal';
  }
  onSubmit(){
    this.customerFuntion();
  }
  customerFuntion(){
    if(this.modeSelected=="Orange Money")
    {
      this.gonumtel();
    }
    else if(this.modeSelected=="Ecobank"){
      this.gonumcbq();
    }
    
  }
  gonumtel(){
  this.router.navigate(['numero']);
  }
  gonumcbq(){
    this.router.navigate(['numcbq']);
    }
}
