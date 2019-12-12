import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { toast } from 'bulma-toast';

import { SignupService } from './signup.service';
import { SignupRequestData } from './signup-request-data';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isVet = false;

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      let signupRequestData = new SignupRequestData(form.value.name, form.value.lastName, form.value.email,
        form.value.phone, form.value.password, form.value.isVet, form.value.resume, form.value.address);
      this.signupService.signup(signupRequestData).subscribe((data) => {
        toast({
          message: "User created successfully",
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
