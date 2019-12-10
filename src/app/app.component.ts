import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as jwt_decode from 'jwt-decode';
import { LoginService } from './login/login.service';
import { Token } from './models/token';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'petclinic-frontend';

  constructor (private loginService: LoginService, private router: Router) {}

  isLogged() {
    return this.loginService.isLogged();
  }

  logout() {
    this.loginService.logout();
  }

  goToMyProfile() {
    let token: Token = this.loginService.currentUserValue;
    if (token) {
      let decoded_token = jwt_decode(token["token"]);
      let email = decoded_token['sub'];
      this.router.navigate(['/users/search/findByEmail'], { queryParams: { email: email } });
    }
  }

  isOwner(): boolean {
    return this.loginService.isOwner();
  }

  isVet(): boolean {
    return this.loginService.isVet();
  }

 }
