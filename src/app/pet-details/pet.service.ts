import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment.prod';
import { PetRequestData } from '../pet-create/pet-request-data';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpClient: HttpClient) { }

  getPetById(id: Number) {
    return this.httpClient.get(environment.api + `/pets/${id}`);
  }

  createPet(petRequestData: PetRequestData, fileToUpload: File) {

    let formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('petDTO', new Blob([JSON.stringify(petRequestData)], {type: "application/json"}));

    return this.httpClient.post(environment.api + '/pets', formData);
  }
}

