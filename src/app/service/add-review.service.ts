import {Injectable} from '@angular/core';
import {AnimeReaction} from "../model/anime-reaction";

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {
  public review: AnimeReaction = {} as AnimeReaction;

  public addUserReview(): void {
    if (sessionStorage.getItem('userReviewList') === null) {
      const userReviewList: Array<AnimeReaction> = new Array<AnimeReaction>();
      userReviewList.push(this.review);
      sessionStorage.setItem('userReviewList', JSON.stringify(userReviewList));
    } else {
      const AnimeReactionList: Array<AnimeReaction> = JSON.parse(sessionStorage.getItem('userReviewList') || '{}');
      AnimeReactionList.push(this.review);
      sessionStorage.setItem('userReviewList', JSON.stringify(AnimeReactionList));
      console.log(JSON.parse(sessionStorage.getItem('userReviewList') || 'undefined'))
    }
  }

  public getUserReview(animeId: number):Array<AnimeReaction> {
    const userReviewList: Array<AnimeReaction> = JSON.parse(sessionStorage.getItem('userReviewList') || '{}');
    const finalList: Array<AnimeReaction> = new Array<AnimeReaction>();
    for(const rev of userReviewList){
      if(rev.id == animeId){
        finalList.push(rev);
      }
    }
    return finalList;
  }
}
