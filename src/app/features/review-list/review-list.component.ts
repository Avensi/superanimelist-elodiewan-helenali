import {Component, Input} from '@angular/core';
import {AnimeReaction} from "../../model/anime-reaction";

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent{
  @Input()
  public animeReactionList:Array<AnimeReaction> = new Array<AnimeReaction>();

}
