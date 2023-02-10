import {Component, Input} from '@angular/core';
import {Anime} from "../../model/anime";

@Component({
  selector: 'app-favorite-anime-card',
  templateUrl: './favorite-anime-card.component.html',
  styleUrls: ['./favorite-anime-card.component.scss']
})
export class FavoriteAnimeCardComponent {

  @Input()
  public anime:Anime = {} as Anime;

  @Input()
  public favorite:boolean = false;

}
