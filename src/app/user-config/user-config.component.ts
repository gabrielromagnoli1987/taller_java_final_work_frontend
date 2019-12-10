import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { toast } from 'bulma-toast';

import { UserService } from '../userdetails/user.service';



@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent implements OnInit {

  userId;
  userConfig;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userId = history.state.userId;
    delete history.state.userConfig.id;
    this.userConfig = history.state.userConfig;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.updateUserConfig(this.userId, this.userConfig).subscribe(data => {
        toast({
          message: "User config updated successfully",
          duration: 5000,
          position: "top-center",
          type: "is-success",
          dismissible: true,
          animate: { in: "fadeInLeftBig", out: "fadeOutRightBig" }
        });
      });
    }
  }

}
