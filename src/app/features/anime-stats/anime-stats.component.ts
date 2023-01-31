import {Component, Input, OnInit} from '@angular/core';
import {AnimeDetails} from "../../model/anime-details";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-anime-stats',
  templateUrl: './anime-stats.component.html',
  styleUrls: ['./anime-stats.component.scss']
})
export class AnimeStatsComponent implements OnInit{
  @Input()
  public anime: AnimeDetails = {} as AnimeDetails;

  public animeScoreRange: number[] = [1,2,3,4,5];
  public currentScore!: number;

  public ngOnInit(): void {
    if(sessionStorage.getItem(String(this.anime.id))+'.score' != null) {
      this.currentScore=Number(sessionStorage.getItem(String(this.anime.id)+'.score'));
    }
  }

  public onChange(score: MatSelectChange) : void {
    sessionStorage.setItem(String(this.anime.id)+'.score', score.value);
  }
}
