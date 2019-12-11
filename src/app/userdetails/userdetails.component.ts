import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { LoginService } from './../login/login.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails;
  imagesHost = environment.imagesHost;

  constructor(private userService: UserService, private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit() {
    const email = this.route.snapshot.queryParams['email'] || '';
    if (email) {
      this.userService.getUserDetailsByEmail(email).subscribe(data => {
        this.userDetails = data;
      });
    }
    const userId = this.route.snapshot.params['id'] || '';
    if (userId) {
      this.userService.getUserDetails(userId).subscribe(data => {
        this.userDetails = data;
      });
    }
  }

  getUserDetails(id: Number) {
    this.userDetails = this.userService.getUserDetails(id).pipe(share());
  }

  isOwner(): boolean {
    return this.loginService.isOwner();
  }

  isVet(): boolean {
    return this.loginService.isVet();
  }

}
