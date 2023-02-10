import {Component, OnInit} from '@angular/core';
import {Auth} from "../../service/auth";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  public constructor(private authService: Auth) {
  }

  public ngOnInit(): void {
    this.authService.logOut();
  }


}
