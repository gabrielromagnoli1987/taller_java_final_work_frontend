import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment.prod';
import { PetRequestData } from '../pet-create/pet-request-data';
import { VaccineRequestData } from '../vaccine-form/vaccine-request-data';
import { SurgerieRequestData } from '../surgerie-form/surgerie-request-data';
import { DiseaseRequestData } from '../disease-form/disease-request-data';
import { ReproductiveHistoryRequestData } from './../reproductive-history-form/reproductive-history-request-data';
import { DewormingRequestData } from '../deworming-form/deworming-request-data';
import { VisitRequestData } from '../visit-form/visit-request-data';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpClient: HttpClient) { }

  getPetById(id: Number) {
    return this.httpClient.get(environment.api + `/pets/${id}`);
  }

  createPet(petRequestData: PetRequestData, filesToUpload: FileList) {
    let formData = new FormData();
    for (let i=0; i<=filesToUpload.length-1; i++ ) {
      formData.append('file', filesToUpload[i], filesToUpload[i].name);
    }
    formData.append('petDTO', new Blob([JSON.stringify(petRequestData)], {type: "application/json"}));
    return this.httpClient.post(environment.api + '/pets', formData);
  }

  addVaccine(petId: number, vaccineRequestData: VaccineRequestData) {
    return this.httpClient.post(environment.api + `/pets/${petId}/vaccines`, vaccineRequestData);
  }

  addSurgerie(petId: number, surgerieRequestData: SurgerieRequestData) {
    return this.httpClient.post(environment.api + `/pets/${petId}/surgeries`, surgerieRequestData);
  }

  addDisease(petId: number, diseaseRequestData: DiseaseRequestData) {
    return this.httpClient.post(environment.api + `/pets/${petId}/diseases`, diseaseRequestData);
  }

  addReproductiveHistory(petId: number, reproductiveHistoryRequestData: ReproductiveHistoryRequestData) {
    return this.httpClient.post(environment.api + `/pets/${petId}/reproductions`, reproductiveHistoryRequestData);
  }

  addDeworming(petId: number, dewormingRequestData: DewormingRequestData) {
    return this.httpClient.post(environment.api + `/pets/${petId}/deworming`, dewormingRequestData);
  }

  addVisit(petId: number, visitRequestData: VisitRequestData) {
    return this.httpClient.post(environment.api + `/pets/${petId}/visits`, visitRequestData);
  }

  deleteVaccine(petId: number, vaccineId: number) {
    return this.httpClient.delete(environment.api + `/pets/${petId}/vaccines/${vaccineId}`)
  }

  deleteSurgerie(petId: number, surgerieId: number) {
    return this.httpClient.delete(environment.api + `/pets/${petId}/surgeries/${surgerieId}`)
  }

  deleteDisease(petId: number, diseaseId: number) {
    return this.httpClient.delete(environment.api + `/pets/${petId}/diseases/${diseaseId}`)
  }

  deleteReproductiveHistoryRecord(petId: number, recordId: number) {
    return this.httpClient.delete(environment.api + `/pets/${petId}/reproductions/${recordId}`)
  }

  deleteDeworming(petId: number, dewormId: number) {
    return this.httpClient.delete(environment.api + `/pets/${petId}/deworming/${dewormId}`)
  }

  deleteVisit(petId: number, visitId: number) {
    return this.httpClient.delete(environment.api + `/pets/${petId}/visits/${visitId}`)
  }

}

