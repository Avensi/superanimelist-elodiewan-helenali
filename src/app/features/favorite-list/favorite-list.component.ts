import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Anime} from "../../model/anime";
import {AnimeListService} from "../../service/anime-list.service";
import {FavoriteService} from "../../service/favorite.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent {
  public favoriteList:Array<Anime> = new Array<Anime>();

  @ViewChild('top', { read: ElementRef }) tableInput!: ElementRef;

  public constructor(private favoriteService: FavoriteService) {
  }

  public async ngOnInit(): Promise<void> {
    this.favoriteList = JSON.parse(sessionStorage.getItem('favoriteList') || '{}');
  }


}
