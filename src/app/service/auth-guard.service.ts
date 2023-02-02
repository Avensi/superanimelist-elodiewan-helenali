import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {Auth} from "./auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public isSigned : boolean = false;
  constructor(public authService: Auth, public router: Router) {}
  public canActivate(): boolean {

    this.authService.isLoggedIn.subscribe((status: boolean) => {
      this.isSigned = status;
    });

    if (!this.isSigned) {
      this.router.navigate(['signIn']);
      return false;
    }
    return true;


  }
}
