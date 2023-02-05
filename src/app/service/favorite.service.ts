import {Injectable} from '@angular/core';
import {Anime} from "../model/anime";
import {Auth} from "./auth";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService{
  private currUser : string = "";
  public constructor(private authService: Auth) {}

  public addFavorite(anime : Anime) : void{
    if (sessionStorage.getItem('favoriteList') === null) {
      const favoriteList: Array<Anime> = new Array<Anime>();
      favoriteList.push(anime);
      sessionStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    } else {
      const favoriteList: Array<Anime> = JSON.parse(sessionStorage.getItem('favoriteList') || '{}');
      if (!this.isAlreadyFavorite(anime, favoriteList)){
        favoriteList.push(anime);
      }
      sessionStorage.setItem('favoriteList', JSON.stringify(favoriteList));
      sessionStorage.setItem(this.authService.getCurrentUser(), JSON.stringify(favoriteList));
    }

  }
  public removeFavorite(anime : Anime) : void {
    const favoriteList: Array<Anime> = JSON.parse(sessionStorage.getItem('favoriteList') || '{}');
    favoriteList.forEach((fav, index) => {
      if(JSON.stringify(fav) === JSON.stringify(anime)) favoriteList.splice(index,1);
    });
    sessionStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    sessionStorage.setItem(this.authService.getCurrentUser(), JSON.stringify(favoriteList));
  }

  public isAlreadyFavorite(anime : Anime, currentFavoriteList : Array<Anime>) : boolean{
    for(const fav of currentFavoriteList){
      if (JSON.stringify(fav) === JSON.stringify(anime)){
        return true;
      }
    }
    return false;
  }


}
