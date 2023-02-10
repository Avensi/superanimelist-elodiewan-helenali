import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Auth} from "../../service/auth";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.scss']
})
export class LogInComponent implements OnInit{

  public error : boolean = false;

  public constructor(
    private authService: Auth,
    private router: Router) {
  }

  public async ngOnInit(): Promise<void> {
    this.authService.error.subscribe((value:boolean) => {
      this.error = value;
    })
  }

  public signInForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.required),
  })

  public onSubmit(): void {
    if (this.signInForm.valid) {
      this.authService.userData = {
        username: this.signInForm.value['email'],
        password: this.signInForm.value['password'],
        grant_type: "password",
      }


      this.authService.logIn();


    }
  }

}
