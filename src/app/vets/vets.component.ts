import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { toast } from 'bulma-toast';

import { UserService } from '../userdetails/user.service';


@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.scss']
})
export class VetsComponent implements OnInit {

  pageableVets;
  deleteModalIsActive = false;
  confirmedDelete = false;
  vetId = -1;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getVets().subscribe(data => {
      this.pageableVets = data;
      console.log(data);
    })
  }

  onSubmit(form: NgForm, vetId) {
    let isEnabledObject = {"isEnable": form.value.isVetEnabled};
    this.userService.enableVetUser(vetId, isEnabledObject).subscribe(data => {
      toast({
        message: "Vet updated successfully",
        duration: 5000,
        position: "top-center",
        type: "is-success",
        dismissible: true,
        animate: { in: "fadeInLeftBig", out: "fadeOutRightBig" }
      });
    });
  }

  deleteVet() {
    this.userService.deleteUser(this.vetId).subscribe(data => {
      this.pageableVets.content.splice( this.pageableVets.content.indexOf(this.vetId), 1 );
      toast({
        message: data['message'],
        duration: 5000,
        position: "top-center",
        type: "is-success",
        dismissible: true,
        animate: { in: "fadeInLeftBig", out: "fadeOutRightBig" }
      });
      this.deleteModalIsActive = false;
    })
  }

  openModal(vetId) {
    this.vetId = vetId;
    this.deleteModalIsActive = true;
  }

  closeModal() {
    this.deleteModalIsActive = false;
    this.vetId = -1;
  }

}
