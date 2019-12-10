import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { toast } from 'bulma-toast';

import { PetService } from '../pet-details/pet.service';
import { PetRequestData } from './pet-request-data';
import { UserService } from '../userdetails/user.service';


@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss']
})
export class PetCreateComponent implements OnInit {

  pageableVets;
  filesToUpload: FileList = null;

  constructor(private petService: PetService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getActiveVets().subscribe(data => {
      this.pageableVets = data;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      let fv = form.value;
      let petRequestData = new PetRequestData(fv.name, fv.borndate, fv.species, fv.race, fv.sex, fv.color, fv.observations, fv.vet);
      this.petService.createPet(petRequestData, this.filesToUpload).subscribe(response => {
        toast({
          message: "Pet created successfully",
          duration: 5000,
          position: "top-center",
          type: "is-success",
          dismissible: true,
          animate: { in: "fadeInLeftBig", out: "fadeOutRightBig" }
        });
        form.reset();
      });
    }
  }

  prepareImage(event) {
    this.filesToUpload = event.target.files;
  }

}
