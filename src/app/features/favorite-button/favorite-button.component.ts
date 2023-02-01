import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  public loggedIn: boolean = false;

  public constructor(private favoriteService : FavoriteService,  private authService: Auth) {}

  public async ngOnInit(): Promise<void> {

    this.authService.isLoggedIn.subscribe((status: boolean) => {
      this.loggedIn = status;
    });
  }

  public toggleFavorite() : void {
    this.favorite =! this.favorite;
    this.selectedChange.emit(this.favorite);
    this.favoriteService.addFavorite(this.anime);

  }

}
