import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Anime} from "../../model/anime";
import {FavoriteService} from "../../service/favorite.service";


@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit{
  public favoriteList:Array<Anime> = new Array<Anime>();

  @ViewChild('top', { read: ElementRef }) tableInput!: ElementRef;

  public constructor(private favoriteService: FavoriteService) {
  }

  public async ngOnInit(): Promise<void> {
    this.favoriteList = JSON.parse(sessionStorage.getItem('favoriteList') || '{}');
  }


}
