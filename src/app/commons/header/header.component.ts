import {Component, OnInit} from "@angular/core";
import {Auth} from "../../service/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public pageList : string[] = ['animeList', 'favorite', 'reviews'];
  public isSigned : boolean = false;

  public constructor(private authService : Auth) {
  }

  public ngOnInit(): void{
    this.authService.isLoggedIn.subscribe((status: boolean) => {
      this.isSigned = status;
    });

  }
}
