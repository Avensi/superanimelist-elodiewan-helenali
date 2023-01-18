import {Injectable} from '@angular/core';
import {Anime} from "../model/anime";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimeListService {

  private configURL: string = 'https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=0&sort=-userCount';

  public constructor(private http: HttpClient) {
  }

  public getAnimes(): Observable<Array<Anime>> {
    return this.http.get<any>(this.configURL).pipe(map(response => {
        const animeList: Array<Anime> = new Array<Anime>();
        for (const item of response.data) {
          const anime: Anime = {
            title: item.attributes.titles.en,
            romaji: item.attributes.titles.en_jp,
            description: item.attributes.synopsis,
            posterImageURL: item.attributes.posterImage.large
          }
          animeList.push(anime);
        }
        return animeList;
      })
    );
  }
}
