import { ImdbSearchResult } from './imdb-search-result';

export interface ImdbSearchResponse {
  "searchType": string;
  "expression": string;
  "results" : ImdbSearchResult[];
  "errorMessage": string;
}
