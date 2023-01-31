import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddReviewService} from "../../service/add-review.service";
import {ActivatedRoute} from "@angular/router";
import {Auth} from "../../service/auth";

@Component({
  selector: 'app-review-input',
  templateUrl: './review-input.component.html',
  styleUrls: ['./review-input.component.scss']
})
export class ReviewInputComponent implements OnInit{

  private animeId : number = 0;
  public loggedIn: boolean = false;

  public constructor(private reviewService : AddReviewService,  private activatedRoute: ActivatedRoute, private authService: Auth) {}

  public reviewForm : FormGroup = new FormGroup({
    review : new FormControl('', Validators.required)
  })

  public async ngOnInit(): Promise<void> {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.animeId = Number(params.get('id'));
    })
    this.authService.isLoggedIn.subscribe((status: boolean) => {
      this.loggedIn = status;
    });
  }
  public onSubmit(): void {
    if (this.reviewForm.valid) {
      this.reviewService.review = {
        reaction: this.reviewForm.value['review'],
        createdAt: new Date(),
        id: this.animeId,
        upVotesCount:0
      }
      this.reviewService.addUserReview();
    }
  }

}
