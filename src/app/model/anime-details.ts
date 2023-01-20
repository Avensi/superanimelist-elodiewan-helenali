import {Anime} from "./anime";

export interface AnimeDetails extends Anime{
  titleEn: string;
  titleEnJp: string;
  titleJp: string;
  coverImage: string;
  subtype: string;
  status: string;
  startDate: Date;
  endDate: Date;
  averageRating: number;
  userCount: number;
  episodeCount: number;
  episodeLength: number;
}
