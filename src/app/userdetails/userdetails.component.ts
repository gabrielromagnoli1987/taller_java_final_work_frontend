import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { UserDetailsService } from './userdetails.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private userDetails;
  private pets: [];
  private imagesHost = environment.imagesHost;

  constructor(private userDetailsService: UserDetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const email = this.route.snapshot.queryParams['email'] || '';
    if (email) {
      //this.userDetails = this.userDetailsService.getUserDetailsByEmail(email).pipe(share());
      this.userDetailsService.getUserDetailsByEmail(email).subscribe(data => {
        this.userDetails = data;
        this.pets = this.userDetails['ownersPets'];
      });
    }
  }

  getUserDetails(id: Number) {
    this.userDetails = this.userDetailsService.getUserDetails(id).pipe(share());
  }

}
