import {Component, Input, OnInit} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {Auth} from "../../service/auth";

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.scss']
})
export class AddRatingComponent implements OnInit{

  @Input()
  public animeId:number = 0;
  public animeScoreRange: number[] = [1,2,3,4,5];
  public currentScore!: number;

  public constructor(private authService: Auth) {}
  public ngOnInit(): void {
    if(sessionStorage.getItem(String(this.animeId))+'.score' != null) {
      this.currentScore=Number(sessionStorage.getItem(String(this.authService.getCurrentUser() +this.animeId)+'.score'));
    }
   ;



  }

  public onChange(score: MatSelectChange) : void {
    sessionStorage.setItem(String(this.authService.getCurrentUser() + this.animeId)+'.score', score.value);
  }
}
