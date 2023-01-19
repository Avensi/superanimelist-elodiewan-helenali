import {Injectable} from '@angular/core';
import {Anime} from "../model/anime";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimeListService {

  private configURL: string = 'https://kitsu.io/api/edge/anime';

  public constructor(private http: HttpClient) {
  }

  public getAnimes(): Observable<Array<Anime>> {
    return this.http.get<any>(this.configURL + "?page[limit]=8&page[offset]=0&sort=-userCount").pipe(map(response => {
        const animeList: Array<Anime> = new Array<Anime>();
        for (const item of response.data) {
          animeList.push(this.convertToAnime(item));
        }
        return animeList;
      })
    );
  }

  public getAnimeById(id: number): Observable<Anime> {
    return this.http.get<any>(this.configURL + "?filter[id]="+id).pipe(map(response => {
        return this.convertToAnime(response.data[0]);
      })
    );
  }

  private convertToAnime(data: any) {

    const titleCheck: string = data.attributes.titles.en ? data.attributes.titles.en : data.attributes.titles.en_jp;
    const romajiCheck: string = data.attributes.titles.en_jp ? data.attributes.titles.en_jp : data.attributes.titles.en;

    const anime: Anime = {
      id: data.id,
      title: titleCheck,
      romaji: romajiCheck,
      description: data.attributes.synopsis,
      posterImageURL: data.attributes.posterImage.large
    }
    return anime;
  }
}
