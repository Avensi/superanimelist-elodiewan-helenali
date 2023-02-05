import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FavoriteService} from "../../service/favorite.service";
import {Anime} from "../../model/anime";
import {Auth} from "../../service/auth";
import {AnimeReaction} from "../../model/anime-reaction";
import * as child_process from "child_process";

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit{


  @Input() public isLoggedIn : boolean = false;
  @Input() public favorite: boolean = false;
  @Input() public anime : Anime = {} as Anime;
  @ViewChild('top', { read: ElementRef }) tableInput!: ElementRef;

  public favoriteList : Array<Anime> = new Array<Anime>();

  public constructor(private favoriteService : FavoriteService,  private authService: Auth) {}

  public async ngOnInit(): Promise<void> {

    this.authService.statut.subscribe((value:boolean) => {
      this.isLoggedIn = value;
    });


    this.favoriteList = JSON.parse(sessionStorage.getItem(this.authService.getCurrentUser()) || '[]')

    if(this.favoriteList.length != 0){
      if(this.favoriteService.isAlreadyFavorite(this.anime, this.favoriteList)){
        this.favorite = true;
      }
    }
  }

  public toggleFavorite() : void {
    this.favorite =! this.favorite;
    if(this.favorite){
      this.favoriteService.addFavorite(this.anime);
    }else{
      this.favoriteService.removeFavorite(this.anime);
    }

  }

}
