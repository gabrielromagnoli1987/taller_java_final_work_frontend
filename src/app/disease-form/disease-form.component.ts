import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { toast } from 'bulma-toast';
import { PetService } from '../pet-details/pet.service';
import { DiseaseRequestData } from './disease-request-data';


@Component({
  selector: 'app-disease-form',
  templateUrl: './disease-form.component.html',
  styleUrls: ['./disease-form.component.scss']
})
export class DiseaseFormComponent implements OnInit {

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const petId = this.route.snapshot.params['id'];
      let fv = form.value;
      let vaccineRequestData = new DiseaseRequestData(fv.description, fv.datetime);
      this.petService.addDisease(petId, vaccineRequestData).subscribe(response => {
        toast({
          message: "Disease added successfully",
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
