import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toast } from 'bulma-toast';
import { PetService } from '../pet-details/pet.service';
import { ReproductiveHistoryRequestData } from './reproductive-history-request-data';


@Component({
  selector: 'app-reproductive-history-form',
  templateUrl: './reproductive-history-form.component.html',
  styleUrls: ['./reproductive-history-form.component.scss']
})
export class ReproductiveHistoryFormComponent implements OnInit {

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const petId = this.route.snapshot.params['id'];
      let fv = form.value;
      let reproductiveHistoryRequestData = new ReproductiveHistoryRequestData(fv.datetime, fv.numberOfpuppies);
      this.petService.addReproductiveHistory(petId, reproductiveHistoryRequestData).subscribe(response => {
        toast({
          message: "Reproductive history added successfully",
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
