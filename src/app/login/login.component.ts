import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { LoginService } from './login.service';
import { LoginRequestData } from './login-request-data';
import { Token } from '../models/token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) {
    // redirect to user details page if already logged in
    let token: Token = this.loginService.currentUserValue;
    if (token) {
      let decoded_token = jwt_decode(token["token"]);
      let email = decoded_token['sub']
      this.router.navigate(['/users/search/findByEmail'], { queryParams: { email: email } });
    }
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      let loginRequestData = new LoginRequestData(form.value.email, form.value.password);
      this.loginService.login(loginRequestData).pipe(first()).subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
    }
  }

}
