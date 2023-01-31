import {Component, Input, OnInit} from '@angular/core';
import {AnimeDetails} from "../../model/anime-details";
import {Auth} from "../../service/auth";

@Component({
  selector: 'app-anime-stats',
  templateUrl: './anime-stats.component.html',
  styleUrls: ['./anime-stats.component.scss']
})
export class AnimeStatsComponent implements OnInit{
  @Input()
  public anime: AnimeDetails = {} as AnimeDetails;
  public loggedIn: boolean = false;

  public constructor(private authService: Auth){}

  public ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((status: boolean) => {
      this.loggedIn = status;
    });
  }
}
