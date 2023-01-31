import {Component, Input} from '@angular/core';
import {AnimeDetails} from "../../model/anime-details";

@Component({
  selector: 'app-anime-stats',
  templateUrl: './anime-stats.component.html',
  styleUrls: ['./anime-stats.component.scss']
})
export class AnimeStatsComponent{
  @Input()
  public anime: AnimeDetails = {} as AnimeDetails;
  public loggedIn: boolean = false;
}
