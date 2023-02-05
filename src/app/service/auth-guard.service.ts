import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {Auth} from "./auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public isLoggedIn : boolean = this.authService.isLoggedIn;
  constructor(public authService: Auth, public router: Router) {}
  public canActivate(): boolean {

    this.isLoggedIn = this.authService.statut.value;

    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;


  }
}
