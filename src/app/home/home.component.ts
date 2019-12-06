import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { HomeService } from './home.service';
import { PageablePublicRecords } from './pageable-public-records';

// https://medium.com/angular-in-depth/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794
// https://medium.com/angular-in-depth/when-to-subscribe-a83332ae053
// My server response is NOT an infinite stream of data so there will be no leaks.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageablePublicRecords: PageablePublicRecords;
  imagesHost = environment.imagesHost;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getPublicRecords(0).subscribe(data => {
      this.pageablePublicRecords = data;
    });
  }

}
