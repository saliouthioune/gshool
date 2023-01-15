import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showParentBoard = false;
  username: string;
  constructor(private router: Router, private tokenStorageService: TokenStorageService,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '	rgb(220,220,220)');
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showParentBoard = this.roles.includes('ROLE_PARENT');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      console.log(this.username);
    }else{
      this.router.navigate(['login']);
    }
  }

  ePatinet() {
    this.router.navigate(['patientList']);
  }

  newPatient() {
    this.router.navigate(['patient']);
  }

}
