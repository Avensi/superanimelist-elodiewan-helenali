import {Component, OnInit} from '@angular/core';
import {Auth} from "../service/auth";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public pageList : string[] = ['animeList', 'list', 'reviews'];
  public isSigned : boolean = false;

  public constructor(public signService : Auth) {
  }

  ngOnInit(){
    this.signService.isLoggedIn.subscribe((status) => {
      this.isSigned = status;
    });
    console.log(this.isSigned)

  }
}
