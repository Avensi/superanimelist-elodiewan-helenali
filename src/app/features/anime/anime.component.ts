import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnimeListService} from "../../service/anime-list.service";
import {lastValueFrom} from "rxjs";
import {AnimeDetails} from "../../model/anime-details";
import {SpinnerService} from "../../service/spinner.service";
import {AnimeReaction} from "../../model/anime-reaction";
import {AnimeReactionService} from "../../service/anime-reaction.service";

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit{

  public anime:AnimeDetails = {} as AnimeDetails;
  public season: string = "";
  public animeId: number = 0;
  public animeReactionList:Array<AnimeReaction> = new Array<AnimeReaction>();

  private seasonList: string[] = ["Winter", "Spring", "Summer", "Fall"];

  public constructor(
    private activatedRoute: ActivatedRoute,
    private animeListService: AnimeListService,
    private animeReactionService: AnimeReactionService,
    public spinner: SpinnerService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.animeId = Number(params.get('id'));
    })
    this.anime = await lastValueFrom(this.animeListService.getAnimeById(this.animeId));
    this.season = this.seasonList[Math.round(this.anime.startDate.getMonth()/4)];
    this.animeReactionList = this.animeReactionService.animeReactionList;
  }
}