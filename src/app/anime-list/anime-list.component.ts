import {Component, OnInit} from '@angular/core';
import {AnimeListService} from "../service/anime-list.service";
import {Anime} from "../model/anime";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit{

  public animeList!: Array<Anime>;

  public constructor(private animeListService: AnimeListService) {
  }

  async ngOnInit() {
   this.animeList = await lastValueFrom(this.animeListService.getAnimes());
    console.log(this.animeList);
  }

}
