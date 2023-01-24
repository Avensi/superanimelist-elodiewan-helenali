import {Component, Input} from '@angular/core';
import {AnimeReaction} from "../model/animeReaction";

@Component({
  selector: 'app-anime-review',
  templateUrl: './anime-review.component.html',
  styleUrls: ['./anime-review.component.scss']
})
export class AnimeReviewComponent {
  @Input()
  public animeReaction: AnimeReaction = {} as AnimeReaction;
}
