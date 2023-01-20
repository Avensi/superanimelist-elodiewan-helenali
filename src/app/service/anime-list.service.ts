import {Injectable} from '@angular/core';
import {Anime} from "../model/anime";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {AnimeDetails} from "../model/anime-details";

@Injectable({
  providedIn: 'root'
})
export class AnimeListService {

  private configURL: string = 'https://kitsu.io/api/edge/anime';

  public constructor(private http: HttpClient) {
  }

  public getAnime(): Observable<Array<Anime>> {
    return this.http.get<any>(this.configURL + "?fields[anime]=id,canonicalTitle,synopsis,posterImage&page[limit]=8&page[offset]=0&sort=-userCount").pipe(map(response => {
        const animeList: Array<Anime> = new Array<Anime>();
        for (const item of response.data) {
          const anime: Anime = {
            id: item.id,
            title: item.attributes.canonicalTitle,
            description: item.attributes.synopsis,
            posterImageURL: item.attributes.posterImage.large
          }
          animeList.push(anime);
        }
        return animeList;
      })
    );
  }

  public getAnimeById(id: number): Observable<Anime> {
    return this.http.get<any>(this.configURL + "?filter[id]=" + id).pipe(map(response => {
        const anime: AnimeDetails = {
          id: response.data[0].id,
          title: response.data[0].attributes.canonicalTitle,
          description: response.data[0].attributes.synopsis,
          posterImageURL: response.data[0].attributes.posterImage.large,
          titleEn: response.data[0].attributes.titles.en,
          titleEnJp: response.data[0].attributes.titles.en_jp,
          titleJp: response.data[0].attributes.titles.ja_jp,
          coverImage: response.data[0].attributes.coverImage.large,
          subtype: response.data[0].attributes.subtype,
          status: response.data[0].attributes.status,
          startDate: response.data[0].attributes.startDate,
          endDate: response.data[0].attributes.endDate,
          averageRating: response.data[0].attributes.averageRating,
          userCount: response.data[0].attributes.userCount,
          episodeCount: response.data[0].attributes.episodeCount,
          episodeLength: response.data[0].attributes.episodeLength,
        }
        return anime;
      })
    );
  }
}
