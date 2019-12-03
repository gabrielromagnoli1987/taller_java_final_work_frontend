import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PetService } from './pet.service';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {

  private pet;

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit() {
    let petId = this.route.snapshot.params['id'] || '';
    if (petId)
    this.petService.getPetById(petId).subscribe(data => {
      this.pet = data;
    });
  }

  getPetById(id: Number) {
    this.petService.getPetById(id).subscribe(data => {
      this.pet = data;
    });
  }

}
