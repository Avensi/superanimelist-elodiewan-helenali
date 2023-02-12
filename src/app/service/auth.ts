import {Injectable} from '@angular/core';
import {UserClass} from "../model/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class Auth {
  public userData: UserClass = {} as UserClass;
  public isLoggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn") || 'false');
  public statut: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
  public error: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private logSuccess: boolean = true;
  private configURL: string = "https://kitsu.io/api/oauth/token";

  public constructor(private http: HttpClient, private router: Router) {
  }

  public logIn(): boolean {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),

    };
    this.http.post<any>(this.configURL, JSON.stringify(this.userData), httpOptions).subscribe(event => {
        sessionStorage.setItem("userToken", JSON.stringify(event.access_token));
        sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
        this.statut.next(true);
        this.router.navigate([""])
      },
      () => {
        sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
        this.statut.next(false);
        this.error.next(true);
      }
    );
    return this.logSuccess
  }

  public logOut(): void {
    this.userData = {} as UserClass;
    sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
    this.statut.next(false);
  }

  public getCurrentUser(): string {
    return JSON.parse(sessionStorage.getItem("userToken") || '{}');
  }
}

