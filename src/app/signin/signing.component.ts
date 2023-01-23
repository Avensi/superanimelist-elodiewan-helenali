import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignInService} from "../service/sign-in.service";
import {UserClass} from "../model/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-signin',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.scss']
})
export class SigningComponent {

  private configURL : string = "https://kitsu.io/api/oauth/token";

  public constructor(private signInService : SignInService, private http : HttpClient) {}


  public signInForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  public onSubmit(): void {
    if (this.signInForm.valid) {
      alert("Le formulaire est valide");
      this.signInService.formValue = new UserClass(
        this.signInForm.value['username'],
        this.signInForm.value['password'],
        "password"
      )

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
      this.http.post(this.configURL,JSON.stringify(this.signInService.formValue), httpOptions).subscribe(event => {
        console.log(JSON.stringify(event))
      })
      ;
    }
  }

}
