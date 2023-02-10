import {Component, OnInit} from '@angular/core';

import {Auth} from "../service/auth";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

  public loggedIn: boolean = false;
  public constructor(
    private authService: Auth
  ) {}

  public async ngOnInit(): Promise<void> {
    this.authService.statut.subscribe((value:boolean) => {
      this.loggedIn = value;
    });

    console.log(this.loggedIn)

  }

}
