import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { LoginRequestData } from './login-request-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: Object;

  constructor(private httpClient: HttpClient) { }

  login(loginRequestData: LoginRequestData) {
    this.httpClient.post(environment.api + '/auth/login', loginRequestData).subscribe((data) => {
      // this.token = data['token']
      this.token = data
    });
  }
}
