import {Component, OnInit} from '@angular/core';
import {AnimeListService} from "../service/anime-list.service";
import {Anime} from "../model/anime";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

  public animeList: Array<Anime> = new Array<Anime>();

  public constructor(private animeListService: AnimeListService) {
  }

  public async ngOnInit(): Promise<void> {
    this.animeList = await lastValueFrom(this.animeListService.getAnimes());
  }

}
