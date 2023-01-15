import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from 'src/app/service/classe/classe.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Classe } from '../Classe';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css']
})
export class ClasseListComponent implements OnInit {
 classList:Classe[];
 search;
 desc: string = '';
  constructor(private cs:ClasseService,private router:Router,private route:ActivatedRoute
    ,private renderer:Renderer2,private tss:TokenStorageService) { }

  ngOnInit(): void {
    if(this.tss.getToken()){
      this.getList();
    }else{
      this.router.navigate(['login']);
    }
  }
  gotoClass(){
    this.router.navigate(['class']);
  }
  getList() {
    this.cs.getAllClass().subscribe((list) => {
      this.classList = list;
    },
      error => {
        console.log(error);
      });

  }
}
