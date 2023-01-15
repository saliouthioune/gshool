import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../etudiant/Etudiant';
import { EtudiantService } from '../service/etudiant/etudiant.service';

@Component({
  selector: 'app-etudiantd',
  templateUrl: './etudiantd.component.html',
  styleUrls: ['./etudiantd.component.css']
})
export class EtudiantdComponent implements OnInit {

  desc: string = '';
  search;
  etudiantList: Etudiant[];
  constructor(private es:EtudiantService,private router:Router) { }

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.es.getAllEtudiantsd().subscribe((list) => {
      this.etudiantList = list;
    },
      error => {
        console.log(error);
      });

  }
  gotoDoctor() {
    this.router.navigate(['etudiant']);
  }
  getDoctor(id: number) {
    this.router.navigate(['etudiantUpdate', id]);
  }

  deleteDoctor(id: number) {
    if (window.confirm('Etes vous sur de vouloir supprimer cet etudaint')) {
      this.es.deleteDoctor(id).subscribe((response) => {
        console.log(response);
        alert('Doctor deleted');
        this.getList();
      },
        error => {
          console.log(error);
        });

    }
  }
}
