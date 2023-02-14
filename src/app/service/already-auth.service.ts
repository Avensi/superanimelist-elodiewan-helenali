import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {Auth} from "./auth";

@Injectable({
  providedIn: 'root'
})
export class AlreadyAuthService implements CanActivate{
  private isLoggedIn : boolean = this.authService.isLoggedIn;
  constructor(private authService: Auth, private router: Router) { }

  public canActivate(): boolean {
    this.isLoggedIn = this.authService.statut.value;
    if (this.isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
