import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddReviewService} from "../service/add-review.service";
import {Review} from "../model/review";
import {ActivatedRoute} from "@angular/router";
import {lastValueFrom} from "rxjs";
@Component({
  selector: 'app-review-input',
  templateUrl: './review-input.component.html',
  styleUrls: ['./review-input.component.scss']
})
export class ReviewInputComponent implements OnInit{

  private animeId : number = 0;

  public constructor(private reviewService : AddReviewService,  private activatedRoute: ActivatedRoute) {}

  public reviewForm : FormGroup = new FormGroup({
    review : new FormControl('', Validators.required)
  })

  public async ngOnInit(): Promise<void> {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.animeId = Number(params.get('id'));
    })
  }
  public onSubmit(): void {
    if (this.reviewForm.valid) {
      this.reviewService.review = new Review(
        this.reviewForm.value['review'],
        new Date(),
        this.animeId
      )
      this.reviewService.addReview();
    }
  }

}
