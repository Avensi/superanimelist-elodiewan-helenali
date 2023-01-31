import {Injectable} from '@angular/core';
import {Review} from "../model/review";

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {
  public review: Review = {} as Review;

  public addReview(): void {
    if (sessionStorage.getItem('reviewList') === null) {
      const reviewList: Array<Review> = new Array<Review>();
      reviewList.push(this.review);
      sessionStorage.setItem('reviewList', JSON.stringify(reviewList));
    } else {
      const reviewList: Array<Review> = JSON.parse(sessionStorage.getItem('reviewList') || 'undefined');
      reviewList.push(this.review);
      sessionStorage.setItem('reviewList', JSON.stringify(reviewList));
    }
  }
}
