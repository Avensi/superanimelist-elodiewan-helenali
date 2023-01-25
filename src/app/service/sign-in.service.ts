import { Injectable } from '@angular/core';
import {UserClass} from "../model/user";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private configURL : string = "https://kitsu.io/api/oauth/token";

  public constructor(private http: HttpClient) {
  }
  public userData!:UserClass;

  public signIn() : void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

      this.http.post<any>(this.configURL,JSON.stringify(this.userData), httpOptions).subscribe(event => {
      this.userData.token = event.access_token;
      this.userData.isSignedIn = true;
      console.log(this.userData)
    })

  }


}

