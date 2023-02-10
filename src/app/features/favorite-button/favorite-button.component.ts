import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FavoriteService} from "../../service/favorite.service";
import {Anime} from "../../model/anime";
import {Auth} from "../../service/auth";

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit{
  @Input() favorite: boolean = false;
  @Input() anime : Anime = {} as Anime;
  @Output() selectedChange = new EventEmitter<boolean>();
  @ViewChild('top', { read: ElementRef }) tableInput!: ElementRef;

  public loggedIn: boolean = false;

  public constructor(private favoriteService : FavoriteService,  private authService: Auth) {}

  public async ngOnInit(): Promise<void> {
    const favoriteList: Array<Anime> = JSON.parse(sessionStorage.getItem('favoriteList') || '{}')
    if(this.favoriteService.isAlreadyFavorite(this.anime, favoriteList)){
      this.favorite = true;
    }
    this.authService.isLoggedIn.subscribe((status: boolean) => {
      this.loggedIn = status;
    });
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
