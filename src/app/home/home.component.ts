import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { HomeService } from './home.service';
import { PageablePublicRecords } from './pageable-public-records';


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
