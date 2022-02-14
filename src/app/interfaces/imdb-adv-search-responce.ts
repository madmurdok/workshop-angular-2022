import { ImdbAdvSearchResult } from './imdb-adv-search-result';

export interface ImdbAdvSearchResponce {
  "queryString": string;
  "results": ImdbAdvSearchResult[];
  "errorMessage": string | null;
}
