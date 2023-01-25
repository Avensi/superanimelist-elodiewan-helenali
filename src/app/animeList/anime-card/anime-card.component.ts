import {Component, Input} from '@angular/core';
import {Anime} from "../../model/anime";

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss']
})
export class AnimeCardComponent {
  @Input()
  public anime:Anime = {} as Anime;
}
