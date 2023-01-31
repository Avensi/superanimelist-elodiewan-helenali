import {Component, Input} from '@angular/core';
import {AnimeReaction} from "../model/anime-reaction";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input()
  public animeReactionList:Array<AnimeReaction> = new Array<AnimeReaction>();
}
