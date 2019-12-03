import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { LoginRequestData } from './login-request-data';
import { Token } from '../models/token';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<Token>;
  public currentUser: Observable<Token>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Token {
    return this.currentUserSubject.value;
  }

  isLogged() {
    if (this.currentUserSubject.value && this.currentUserSubject.value.token) {
      return true;
    } else {
      return false;
    }
  }

  login(loginRequestData: LoginRequestData) {
    return this.httpClient.post<any>(environment.api + '/auth/login', loginRequestData).pipe(map(token => {
      // store jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(token));
      this.currentUserSubject.next(token);
      return token;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
