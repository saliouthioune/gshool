import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourService } from 'src/app/service/cour/cour.service';

@Component({
  selector: 'app-list-cour',
  templateUrl: './list-cour.component.html',
  styleUrls: ['./list-cour.component.css']
})
export class ListCourComponent implements OnInit {

  constructor(private cs:CourService,private router:Router) { }
 ins:any[];
  ngOnInit(): void {
    this.getListeInscrire();
  }
  getListeInscrire(){
    this.cs.getListeCours().subscribe(
      (data)=>{
        this.ins=data;
      }
    )
  }
  
  gotoaddCour(){
    this.router.navigate(['cour']);
  }
}
