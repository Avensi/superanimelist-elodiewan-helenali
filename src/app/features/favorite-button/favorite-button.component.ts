import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FavoriteService} from "../../service/favorite.service";
import {Anime} from "../../model/anime";
import {Auth} from "../../service/auth";
import {AnimeReaction} from "../../model/anime-reaction";

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit{


  @Input() isLoggedIn : boolean = false;
  @Input() favorite: boolean = false;
  @Input() anime : Anime = {} as Anime;
  @Output() selectedChange = new EventEmitter<boolean>();
  @ViewChild('top', { read: ElementRef }) tableInput!: ElementRef;

  private currUser: string = this.authService.getCurrentUser();

  public favoriteList : Array<Anime> = JSON.parse(sessionStorage.getItem(this.currUser) || '[]');


  public constructor(private favoriteService : FavoriteService,  private authService: Auth) {}

  public async ngOnInit(): Promise<void> {

    this.authService.statut.subscribe((value:boolean) => {
      this.isLoggedIn = value;
    });

    this.authService.currUser.subscribe((value:string) => {
      this.currUser = value;
    });

    this.favoriteService.changeFavorite.subscribe((value:Array<Anime>) => {
      this.favoriteList = value.concat(this.favoriteList);
    })

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

    this.selectedChange.emit(this.favorite);



  }

}
