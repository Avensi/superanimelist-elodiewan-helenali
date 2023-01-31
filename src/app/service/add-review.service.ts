import { Injectable } from '@angular/core';
import {Review} from "../model/review";
import {lastValueFrom} from "rxjs";
import {Anime} from "../model/anime";




@Injectable({
  providedIn: 'root'
})
export class AddReviewService {

  constructor() {}

  public review!: Review;


  public addReview() : void {
    if(sessionStorage.getItem('reviewList') === null) {
      const reviewList : Array<Review> = new Array<Review>();
      reviewList.push(this.review);
      sessionStorage.setItem('reviewList', JSON.stringify(reviewList));
    } else {
      const reviewList : Array<Review> = JSON.parse(sessionStorage.getItem('reviewList') || 'undefined');
      reviewList.push(this.review);
      sessionStorage.setItem('reviewList', JSON.stringify(reviewList));

    }
  }

}
