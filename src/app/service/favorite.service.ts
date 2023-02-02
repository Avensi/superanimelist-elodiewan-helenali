import { Injectable } from '@angular/core';
import {Anime} from "../model/anime";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public addFavorite(anime : Anime) : void{
    if (sessionStorage.getItem('favoriteList') === null) {
      const favoriteList: Array<Anime> = new Array<Anime>();
      favoriteList.push(anime);
      sessionStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    } else {
      const favoriteList: Array<Anime> = JSON.parse(sessionStorage.getItem('favoriteList') || '{}');
      if (!this.isAlreadyFavorite(anime, favoriteList)){
        favoriteList.push(anime)
      }

      sessionStorage.setItem('favoriteList', JSON.stringify(favoriteList));

    }

  }

  public isAlreadyFavorite(anime : Anime, currentFavoriteList : Array<Anime>) : boolean{
    for(const fav of currentFavoriteList){
      if (JSON.stringify(fav) === JSON.stringify(anime)){
        return true
      }
    }
    return false
  }


}
