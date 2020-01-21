import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { toast } from 'bulma-toast';
import { PetService } from '../pet-details/pet.service';
import { SurgerieRequestData } from './surgerie-request-data';


@Component({
  selector: 'app-surgerie-form',
  templateUrl: './surgerie-form.component.html',
  styleUrls: ['./surgerie-form.component.scss']
})
export class SurgerieFormComponent implements OnInit {

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const petId = this.route.snapshot.params['id'];
      let fv = form.value;
      let vaccineRequestData = new SurgerieRequestData(fv.description, fv.datetime);
      this.petService.addSurgerie(petId, vaccineRequestData).subscribe(response => {
        toast({
          message: "Surgerie added successfully",
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
