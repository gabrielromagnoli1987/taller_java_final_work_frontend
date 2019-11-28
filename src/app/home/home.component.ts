import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { HomeService } from './home.service';
import { PageablePublicRecords } from './pageable-public-records';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

// https://medium.com/angular-in-depth/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private pageablePublicRecords: PageablePublicRecords;
  //private pageablePublicRecords: Observable<PageablePublicRecords>;
  private publicRecords: any[];
  private imagesHost = environment.imagesHost;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getPublicRecords(0).subscribe(data => {
      this.pageablePublicRecords = data;
      this.publicRecords = data['content'];
    });
  }

  /* ngOnInit() {
    this.pageablePublicRecords = this.homeService.getPublicRecords(0).pipe(share());;
  } */

}
