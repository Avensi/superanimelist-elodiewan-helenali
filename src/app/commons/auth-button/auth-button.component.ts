import {Component, Input, OnInit} from '@angular/core';
import {Auth} from "../../service/auth";


@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit{

  @Input() public isLoggedIn : boolean = false;

  public constructor(private authService: Auth) {}

  public async ngOnInit(): Promise<void> {
    this.authService.statut.subscribe((value:boolean) => {
      this.isLoggedIn = value;
    })
    console.log(this.isLoggedIn)
  }

  public toggleLogin() : void {
    if(this.isLoggedIn){
      this.authService.logOut();
    }
  }


}
