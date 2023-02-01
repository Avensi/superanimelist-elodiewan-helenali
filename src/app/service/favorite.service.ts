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
      favoriteList.push(anime);
      sessionStorage.setItem('favoriteList', JSON.stringify(favoriteList));

    }
    console.log(JSON.parse(sessionStorage.getItem('favoriteList') || 'undefined'))
  }


}
