import {Injectable} from '@angular/core';
import {Anime} from "../model/anime";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {AnimeDetails} from "../model/anime-details";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AnimeListService {

  private configURL: string = 'https://kitsu.io/api/edge/anime';

  public constructor(private http: HttpClient, private router: Router) {
  }

  public getAnime(): Observable<Array<Anime>> {
    return this.http.get<any>(this.configURL + "?fields[anime]=id,canonicalTitle,synopsis,posterImage&page[limit]=8&page[offset]=0&sort=-userCount").pipe(map((response:any) => {
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
      }),
      catchError(err => {
        console.log(err.message);
        this.router.navigate(["/error404"]);
        throw '';
      })
    );
  }

  public getAnimeById(id: number): Observable<AnimeDetails> {
    return this.http.get<any>(this.configURL + "?filter[id]=" + id).pipe(map((response:any) => {
        const anime: AnimeDetails = {
          id: response.data[0].id,
          title: response.data[0].attributes.canonicalTitle,
          description: response.data[0].attributes.synopsis,
          posterImageURL: response.data[0].attributes.posterImage.large,
          titleEn: response.data[0].attributes.titles.en,
          titleEnJp: response.data[0].attributes.titles.en_jp,
          titleJp: response.data[0].attributes.titles.ja_jp,
          coverImage: response.data[0].attributes.coverImage? response.data[0].attributes.coverImage.small : 'https://kitsu.io/images/default_cover-22e5f56b17aeced6dc7f69c8d422a1ab.png',
          subtype: response.data[0].attributes.subtype,
          status: response.data[0].attributes.status,
          startDate: new Date(response.data[0].attributes.startDate),
          endDate: new Date(response.data[0].attributes.endDate),
          averageRating: response.data[0].attributes.averageRating,
          userCount: response.data[0].attributes.userCount,
          episodeCount: response.data[0].attributes.episodeCount,
          episodeLength: response.data[0].attributes.episodeLength,
          popularityRank: response.data[0].attributes.popularityRank,
          ratingRank: response.data[0].attributes.ratingRank
        }
        return anime;
      }),
      catchError(err => {
        console.log(err.message);
        this.router.navigate(["/error404"]);
        throw '';
      })
    );
  }
}
