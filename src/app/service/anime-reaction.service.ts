import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, map, Observable} from "rxjs";
import {AnimeReaction} from "../model/animeReaction";

@Injectable({
  providedIn: 'root'
})
export class AnimeReactionService {

  private configURL: string = 'https://kitsu.io/api/edge/media-reactions/';

  public constructor(private http: HttpClient) {
  }

  public getAnimeReactionById(animeId: number): Observable<Promise<Array<AnimeReaction>>> {
    return this.http.get<any>(this.configURL + '?filter[animeId]=' + animeId+ '&include=user').pipe(map(async (response: any) => {
      const animeReactionList: Array<AnimeReaction> = new Array<AnimeReaction>();
      for (const item of response.data) {
        const animeReaction: AnimeReaction = {
          id: item.id,
          reaction: item.attributes.reaction,
          upVotesCount: item.attributes.upVotesCount,
          createdAt: new Date(item.attributes.createdAt),
          user: await lastValueFrom(this.getUser(item.id))
        };
        animeReactionList.push(animeReaction);
      }
      return animeReactionList;
    }));
  }

  private getUser(commentId: number): Observable<string> {
    return this.http.get<any>(this.configURL + commentId + '/user').pipe(map((response: any) => {
      return response.data.attributes.name;
    }));
  }
}
