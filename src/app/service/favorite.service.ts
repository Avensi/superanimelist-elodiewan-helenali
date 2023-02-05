import {Injectable} from '@angular/core';
import {Anime} from "../model/anime";
import {Auth} from "./auth";



@Injectable({
  providedIn: 'root'
})
export class FavoriteService{

  public constructor(private authService: Auth) {}

  public addFavorite(anime : Anime) : void{
    if (sessionStorage.getItem(this.authService.getCurrentUser()) === null) {
      const favoriteList: Array<Anime> = new Array<Anime>();
      favoriteList.push(anime);
      sessionStorage.setItem(this.authService.getCurrentUser(), JSON.stringify(favoriteList));

    } else {
      const favoriteList: Array<Anime> = JSON.parse(sessionStorage.getItem(this.authService.getCurrentUser()) || '[]');
      if (!this.isAlreadyFavorite(anime, favoriteList)){
        favoriteList.push(anime);
      }
      sessionStorage.setItem(this.authService.getCurrentUser(), JSON.stringify(favoriteList));
    }

  }
  public removeFavorite(anime : Anime) : void {
    const favoriteList: Array<Anime> = JSON.parse(sessionStorage.getItem(this.authService.getCurrentUser()) || '[]');
    favoriteList.forEach((fav, index) => {
      if(JSON.stringify(fav) === JSON.stringify(anime)) favoriteList.splice(index,1);
    });
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
