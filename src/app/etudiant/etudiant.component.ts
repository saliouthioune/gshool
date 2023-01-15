import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../service/etudiant/etudiant.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Etudiant } from './Etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  btn = 'save';
  sexes = ['M', 'F']
  @Input()
  doc: Etudiant = new Etudiant();
  @Output()
  bookAddedEvent = new EventEmitter();
  id;
  public see="Sexe";
  imgURL:any;
  private selectedFile;
  constructor(private es: EtudiantService, private renderer: Renderer2
    , private router: Router, private route: ActivatedRoute, private tss: TokenStorageService,
    private httpClient:HttpClient) { }

    ngOnInit(): void {
      if (this.tss.getToken()) {
        if (this.route.snapshot.params['id'] > 0) {
          this.btn = 'Update';
          this.id = this.route.snapshot.params['id'];
          this.getDoctor();
        }
      } else {
        this.router.navigate(['login']);
      }
    }

    public onFileChanged(event) {
      console.log(event);
      this.selectedFile = event.target.files[0];
  
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event2) => {
        this.imgURL = reader.result;
      };
  
    }


    saveBook() {
      if (this.doc.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;
  
      this.httpClient.post('http://localhost:8083/hms/api/upload', uploadData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.es.addDoctor(this.doc).subscribe(
              (doc) => {
                this.bookAddedEvent.emit();
                alert('Etudiant bien ajouté');
                this.gotoNext();
              }
            );
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
        );
      }else {
        this.es.updateDoctor(this.id,this.doc).subscribe(
          (book) => {
            this.bookAddedEvent.emit();
            this.gotoNext();
          }
        );
      }
    }
    //
    getDoctor() {
      this.es.getDoctorById(this.id).subscribe((data) => {
        this.doc = data;
      },
        error => {
          console.log(error);
        });
    }
    onSubmit() {
      this.saveBook();
    }
    update() {
      this.es.updateDoctor(this.id, this.doc).subscribe((data) => {
        console.log(data);
        alert("Student updated successfully");
        this.gotoNext();
      },
        error => {
          console.log(error);
          alert("can't update your data");
        });
    }
    check() {
      this.es.checkIsAvailable(this.doc)
        .subscribe(res => {
          console.log(res.available);
          if (!res.available) {
            this.save();
          } else {
            alert('Etudiant already exists');
          }
        },
          error => console.log(error));
    }
    save() {
      this.es.addDoctor(this.doc).subscribe((data) => {
        console.log(data);
        alert("Student added successfully");
        this.gotoNext();
      },
        error => {
          console.log(error);
          alert('can not save your data');
        });
    }
    gotoNext() {
      this.router.navigate(['etudiantList']);
    }
  
    reset() {
      this.doc.name = null;
      this.doc.prenom = null;
      this.doc.address = null;
      this.doc.email = null;
      this.doc.sexe = null;
      this.doc.datenaissance = null;
      this.doc.phone = null;
    }
gotoLogin(){
  this.router.navigate(['']);
}
}
