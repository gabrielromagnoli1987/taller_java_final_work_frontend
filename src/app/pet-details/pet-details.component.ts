import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'q';

import { environment } from './../../environments/environment';
import { PetService } from './pet.service';
import bulmaCarousel from 'node_modules/bulma-carousel/dist/js/bulma-carousel.min.js';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {

  pet;
  imagesHost = environment.imagesHost;
  carousels;

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

}
