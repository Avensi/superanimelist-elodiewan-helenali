import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddReviewService} from "../../service/add-review.service";
import {ActivatedRoute} from "@angular/router";

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
      this.reviewService.review = {
        reaction: this.reviewForm.value['review'],
        createdAt: new Date(),
        animeId: this.animeId
      }
      this.reviewService.addReview();
    }
  }

}
