import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'q';
import bulmaCarousel from 'node_modules/bulma-carousel/dist/js/bulma-carousel.min.js';
import { toast } from 'bulma-toast';
import { environment } from './../../environments/environment';
import { PetService } from './pet.service';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {

  pet;
  imagesHost = environment.imagesHost;
  carousels;
  deleteModalIsActive = false;
  confirmedDelete = false;
  recordType = '';
  deleteRecordOfId = -1;

  constructor(private petService: PetService, private route: ActivatedRoute) {
  }

  startCarousel() {
    this.carousels = bulmaCarousel.attach('#carousel-pet-images', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      autoplay: true
    });
  }

  ngOnInit() {
    let petId = this.route.snapshot.params['id'] || '';
    if (petId) {
      this.petService.getPetById(petId).subscribe(data => {
        this.pet = data;
        delay(1).then(() => {
          this.startCarousel();
        });
      });
    }
  }

  getPetById(id: Number) {
    this.petService.getPetById(id).subscribe(data => {
      this.pet = data;
    });
  }

  openModal(recordId, recordType: string) {
    this.recordType = recordType;
    this.deleteRecordOfId = recordId;
    this.deleteModalIsActive = true;
  }

  closeModal() {
    this.deleteModalIsActive = false;
    this.deleteRecordOfId = -1;
  }

  delete() {
    switch (this.recordType) {
      case 'vaccines':
        this.deleteVaccine(this.deleteRecordOfId);
        this.recordType = '';
        break;
      case 'surgeries':
        this.deleteSurgerie(this.deleteRecordOfId);
        this.recordType = '';
        break;
      case 'diseases':
        this.deleteDisease(this.deleteRecordOfId);
        this.recordType = '';
        break;
      case 'reproductions':
        this.deleteReproductiveHistoryRecord(this.deleteRecordOfId);
        this.recordType = '';
        break;
      case 'deworms':
        this.deleteDeworming(this.deleteRecordOfId);
        this.recordType = '';
        break;
      case 'visits':
        this.deleteVisit(this.deleteRecordOfId);
        this.recordType = '';
        break;
    }
  }

  deleteVaccine(vaccineId: number) {
    this.petService.deleteVaccine(this.pet.id, vaccineId).subscribe(response => {
      this.pet.vaccines.splice(this.pet.vaccines.indexOf(vaccineId), 1);
      this.showToast("Vaccine deleted successfully");
      this.deleteModalIsActive = false;
    });
  }

  deleteSurgerie(surgerieId: number) {
    this.petService.deleteSurgerie(this.pet.id, surgerieId).subscribe(response => {
      this.pet.surgeries.splice(this.pet.surgeries.indexOf(surgerieId), 1);
      this.showToast("Surgerie deleted successfully");
      this.deleteModalIsActive = false;
    });
  }

  deleteDisease(diseaseId: number) {
    this.petService.deleteDisease(this.pet.id, diseaseId).subscribe(response => {
      this.pet.diseases.splice(this.pet.diseases.indexOf(diseaseId), 1);
      this.showToast("Disease deleted successfully");
      this.deleteModalIsActive = false;
    });
  }

  deleteReproductiveHistoryRecord(recordId: number) {
    this.petService.deleteReproductiveHistoryRecord(this.pet.id, recordId).subscribe(response => {
      this.pet.reproductiveHistory.splice(this.pet.reproductiveHistory.indexOf(recordId), 1);
      this.showToast("Reproductive history record deleted successfully");
      this.deleteModalIsActive = false;
    });
  }

  deleteDeworming(dewormId: number) {
    this.petService.deleteDeworming(this.pet.id, dewormId).subscribe(response => {
      this.pet.deworming.splice(this.pet.deworming.indexOf(dewormId), 1);
      this.showToast("Deworming record deleted successfully");
      this.deleteModalIsActive = false;
    });
  }

  deleteVisit(visitId: number) {
    this.petService.deleteVisit(this.pet.id, visitId).subscribe(response => {
      this.pet.visits.splice(this.pet.visits.indexOf(visitId), 1);
      this.showToast("Visit deleted successfully");
      this.deleteModalIsActive = false;
    });
  }

  showToast(message: string) {
    toast({
      message: message,
      duration: 5000,
      position: "top-center",
      type: "is-success",
      dismissible: true,
      animate: { in: "fadeInLeftBig", out: "fadeOutRightBig" }
    });
  }

}
