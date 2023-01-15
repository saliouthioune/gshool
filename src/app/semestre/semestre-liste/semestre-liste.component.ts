import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SemestreService } from 'src/app/service/semestre/semestre.service';
import { Semestre } from '../semestre';

@Component({
  selector: 'app-semestre-liste',
  templateUrl: './semestre-liste.component.html',
  styleUrls: ['./semestre-liste.component.css']
})
export class SemestreListeComponent implements OnInit {
  sems:Semestre[];
  constructor(private ss:SemestreService,private router:Router) { }

  ngOnInit(): void {
    this.listeSems();
  }
  listeSems(){
    this.ss.listeaddSemestre().subscribe(
      (data)=>{
        this.sems=data;
      }
    )
  }
  gotoSemestre(){
    this.router.navigate(['semestre']);
  }
}
