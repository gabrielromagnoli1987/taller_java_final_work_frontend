import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { toast } from 'bulma-toast';
import { PetService } from '../pet-details/pet.service';
import { DewormingRequestData } from './deworming-request-data';


@Component({
  selector: 'app-deworming-form',
  templateUrl: './deworming-form.component.html',
  styleUrls: ['./deworming-form.component.scss']
})
export class DewormingFormComponent implements OnInit {

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const petId = this.route.snapshot.params['id'];
      let fv = form.value;
      let dewormingRequestData = new DewormingRequestData(fv.datetime, fv.drug, fv.result);
      this.petService.addDeworming(petId, dewormingRequestData).subscribe(response => {
        toast({
          message: "Deworming added successfully",
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
