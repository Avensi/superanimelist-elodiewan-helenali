import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Auth} from "../../service/auth";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.scss']
})
export class LogInComponent {

  public constructor(
    private signInService: Auth,
    private http: HttpClient,
    private router: Router) {
  }

  public signInForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  public onSubmit(): void {
    if (this.signInForm.valid) {
      this.signInService.userData = {
        username: this.signInForm.value['username'],
        password: this.signInForm.value['password'],
        grant_type: "password",
        token: ""
      }
      this.signInService.logIn();
      this.router.navigate(["/animeList"])
    }
  }

}