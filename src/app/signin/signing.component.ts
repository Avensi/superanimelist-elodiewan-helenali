import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignInService} from "../service/sign-in.service";
import {UserClass} from "../model/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.scss']
})
export class SigningComponent {

  public constructor(private signInService : SignInService, private http : HttpClient, private router : Router) {}


  public signInForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  public onSubmit(): void {
    if (this.signInForm.valid) {
      this.signInService.userData = new UserClass(
        this.signInForm.value['username'],
        this.signInForm.value['password'],
        "password",
        "",
        false,
      )
      this.signInService.signIn();
      this.router.navigate(["/animeList"])
    }
  }

}
