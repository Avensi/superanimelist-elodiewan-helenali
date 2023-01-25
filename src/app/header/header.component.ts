import { Component } from '@angular/core';
import {SignInService} from "../service/sign-in.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public pageList : string[] = ['animeList', 'list', 'reviews'];

  public constructor(public signService : SignInService) {
  }
}
