import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/service/etudiant/etudiant.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Etudiant } from '../Etudiant';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  desc: string = '';
  search;
  etudiantList: Array<Etudiant>;
  booksRecieved: Array<Etudiant>;
  constructor(private router: Router, private ds: EtudiantService, private tss: TokenStorageService,
    private renderer: Renderer2) { }

    ngOnInit(): void {
      if (this.tss.getToken()) {
        this.getList();
      } else {
        this.router.navigate(['login']);
      }
  
    }
  
 // we will be taking the books response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.etudiantList = new Array<Etudiant>();
    //get books returned by the api call
    this.booksRecieved = response;
    for (const doc of this.booksRecieved) {

      const bookwithRetrievedImageField = new Etudiant();
      bookwithRetrievedImageField.id = doc.id;
      bookwithRetrievedImageField.name = doc.name;
      //populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + doc.picByte;
      bookwithRetrievedImageField.prenom = doc.prenom;
      bookwithRetrievedImageField.username = doc.username;
      bookwithRetrievedImageField.address = doc.address;
      bookwithRetrievedImageField.phone= doc.phone;
      bookwithRetrievedImageField.sexe = doc.sexe;
      bookwithRetrievedImageField.email= doc.email;
      bookwithRetrievedImageField.datenaissance = doc.datenaissance;
      bookwithRetrievedImageField.picByte = doc.picByte;
      this.etudiantList.push(bookwithRetrievedImageField);
    }
  }

    getList() {
      this.ds.getAllDoctor().subscribe((response) => {
        this.handleSuccessfulResponse(response);
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
        this.ds.deleteDoctor(id).subscribe((response) => {
          console.log(response);
          alert('Doctor deleted');
          this.getList();
        },
          error => {
            console.log(error);
          });
  
      }
    }
    MettreAjourC() {
      this.router.navigate(['etudiantd']);
    }
    MettreAjourP() {
      this.router.navigate(['etudiantp']);
    }

    goinscrire(id:any) {
      this.router.navigate(['inscrire',id]);
    }
    
}
