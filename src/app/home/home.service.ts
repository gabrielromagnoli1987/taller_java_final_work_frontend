import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageablePublicRecords } from './pageable-public-records';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getPublicRecords(page: Number, size?: Number): Observable<PageablePublicRecords> {
    return this.httpClient.get<PageablePublicRecords>(environment.api + `/public-records?page=${page}&size=${size}`);
  }

}
