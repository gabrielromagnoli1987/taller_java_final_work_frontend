import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpClient: HttpClient) { }

  getPetById(id: Number) {
    return this.httpClient.get(environment.api + `/pets/${id}`);
  }
}
