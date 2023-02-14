import {Injectable} from '@angular/core';
import {AnimeReaction} from "../model/anime-reaction";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {
  public review: AnimeReaction = {} as AnimeReaction;
  public changedItem: BehaviorSubject<Array<AnimeReaction>> = new BehaviorSubject<Array<AnimeReaction>>(new Array<AnimeReaction>());

  public addUserReview(): void {
    if (sessionStorage.getItem('userReviewList') === null) {
      const userReviewList: Array<AnimeReaction> = new Array<AnimeReaction>();
      userReviewList.push(this.review);
      sessionStorage.setItem('userReviewList', JSON.stringify(userReviewList));
      this.changedItem.next(new Array<AnimeReaction>(this.review));
    } else {
      const userReviewList: Array<AnimeReaction> = JSON.parse(sessionStorage.getItem('userReviewList') || '[]');
      userReviewList.push(this.review);
      sessionStorage.setItem('userReviewList', JSON.stringify(userReviewList));
      this.changedItem.next(this.getUserReview(this.review.id))
    }
  }

  public getUserReview(animeId: number):Array<AnimeReaction> {
    const userReviewList: Array<AnimeReaction> = JSON.parse(sessionStorage.getItem('userReviewList') || '[]');
    const finalList: Array<AnimeReaction> = new Array<AnimeReaction>();
    if(userReviewList.length !=0){
      for(const rev of userReviewList){
        if(rev.id == animeId){
          finalList.push(rev);
        }
      }
    }
    finalList.reverse();
    this.changedItem.next(finalList);
    return finalList;
  }
}
