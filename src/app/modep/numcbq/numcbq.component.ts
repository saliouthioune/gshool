import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numcbq',
  templateUrl: './numcbq.component.html',
  styleUrls: ['./numcbq.component.css']
})
export class NumcbqComponent implements OnInit {
  btn='Save'
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
