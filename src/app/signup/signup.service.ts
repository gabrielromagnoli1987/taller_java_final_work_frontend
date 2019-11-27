import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { SignupRequestData } from './signup-request-data';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  signup(signupRequestData: SignupRequestData) {
    this.httpClient.post(environment.api + '/auth/sign-up', signupRequestData).subscribe((data) => {
      console.log(data)
    });
  }
}
