import { Dictionary } from '../_shared/interfaces/app-types.interface';

export interface ImdbAdvSearchResult {
  id: string;
  image: string;
  title: string;
  description: string;
  "runtimeStr": string;
  "genres": string;
  "genreList": Dictionary<string>[];
  "contentRating": string;
  "imDbRating": string;
  "imDbRatingVotes": string;
  "metacriticRating": string;
  "plot": string;
  "stars": string;
  "starList": Dictionary<string>[]
}
