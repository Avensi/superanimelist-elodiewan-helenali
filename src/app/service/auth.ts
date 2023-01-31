import {Injectable} from '@angular/core';
import {UserClass} from "../model/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Auth {
  public userData: UserClass = {} as UserClass;
  public isLoggedIn = new BehaviorSubject(false);
  private configURL: string = "https://kitsu.io/api/oauth/token";

  public constructor(private http: HttpClient) {
  }

  public logIn(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.post<any>(this.configURL, JSON.stringify(this.userData), httpOptions).subscribe(event => {
      this.userData.token = event.access_token;
      this.isLoggedIn.next(true);
    })

  }

  public logOut(): void {
    this.isLoggedIn.next(false);
  }


}

