import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnimeListService} from "../service/anime-list.service";
import {lastValueFrom} from "rxjs";
import {AnimeDetails} from "../model/anime-details";

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit{

  public anime:AnimeDetails = {} as AnimeDetails;
  public season: String = "";

  private animeId: number = 0;
  private seasonList: String[] = ["Winter", "Spring", "Summer", "Fall"];

  public constructor(private activatedRoute: ActivatedRoute, private animeListService: AnimeListService) {
  }

  public async ngOnInit(): Promise<void> {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.animeId = Number(params.get('id'));
    })
    this.anime = await lastValueFrom(this.animeListService.getAnimeById(this.animeId));
    console.log(this.anime)
    this.season = this.seasonList[Math.round(this.anime.startDate.getMonth()/4)]
  }

}
