import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {AnimeReactionService} from "../service/anime-reaction.service";
import {AnimeReaction} from "../model/anime-reaction";
import {AnimeListService} from "../service/anime-list.service";

@Injectable({
  providedIn: 'root'
})
export class ReactionsResolver implements Resolve<Promise<AnimeReaction[]>> {

  public constructor(private anime: AnimeListService, private animeReaction: AnimeReactionService) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Promise<AnimeReaction[]>> {
    return this.animeReaction.getAnimeReactionById(Number(route.paramMap.get('id')));
  }
}
