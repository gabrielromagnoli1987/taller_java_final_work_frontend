import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { toast } from 'bulma-toast';
import { PetService } from '../pet-details/pet.service';
import { VaccineRequestData } from './vaccine-request-data';


@Component({
  selector: 'app-vaccine-form',
  templateUrl: './vaccine-form.component.html',
  styleUrls: ['./vaccine-form.component.scss']
})
export class VaccineFormComponent implements OnInit {

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const petId = this.route.snapshot.params['id'];
      let fv = form.value;
      let vaccineRequestData = new VaccineRequestData(fv.description, fv.datetime);
      this.petService.addVaccine(petId, vaccineRequestData).subscribe(response => {
        toast({
          message: "Vaccine added successfully",
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

}
