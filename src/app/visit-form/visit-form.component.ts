import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { toast } from 'bulma-toast';
import { PetService } from '../pet-details/pet.service';
import { UserService } from '../userdetails/user.service';
import { VisitRequestData } from './visit-request-data';


@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrls: ['./visit-form.component.scss']
})
export class VisitFormComponent implements OnInit {

  pageableVets;

  constructor(private petService: PetService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getActiveVets().subscribe(data => {
      this.pageableVets = data;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const petId = this.route.snapshot.params['id'];
      let fv = form.value;
      let visitRequestData = new VisitRequestData(fv.datetime, fv.weight, fv.reason, fv.diagnosis, fv.indications, fv.vet);
      this.petService.addVisit(petId, visitRequestData).subscribe(response => {
        toast({
          message: "Visit added successfully",
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
