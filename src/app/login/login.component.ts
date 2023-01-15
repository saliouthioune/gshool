import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myImage:string ="assets/Image/image.jpg";
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private ls: LoginService, private router: Router, private tokenStorage: TokenStorageService,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '	rgb(220,220,220)');
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.gotoIndex();
    }
  }
  gotoInscrireEtudiant(){
    this.router.navigate(['etudiant']);
  }
  doLogin(): void {
    this.ls.login(this.form).subscribe(
      data => {
       this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        alert('Vous etes connecter a un  ' + this.roles);
        this.gotoIndex();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        alert('Login Failed + ' + this.errorMessage);
      }
    );
  }
  gotoIndex(){
    this.router.navigate(['home']);
  }

gotoSignUp(){
  this.router.navigate(['sign-up'])
}

}
