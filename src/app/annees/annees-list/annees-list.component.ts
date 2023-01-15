import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnneesService } from 'src/app/service/annees/annees.service';
import { AnneAcad } from '../Annee';

@Component({
  selector: 'app-annees-list',
  templateUrl: './annees-list.component.html',
  styleUrls: ['./annees-list.component.css']
})
export class AnneesListComponent implements OnInit {
annees:AnneAcad[];
  constructor(private as:AnneesService,private route:Router) { }

  ngOnInit(): void {
    this.getAllyear();
  }
  getAllyear(){
    this.as.listeYear().subscribe(
      (data)=>{
        this.annees=data;
      }
    )
  }
  gotoaddyear(){
    this.route.navigate(['annee']);
  }
}
