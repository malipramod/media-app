export interface MediaSearchResult {
  Search: Array<Search>;
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: Type;
  Poster: string;
}

export enum Type {
  Game = "game",
  Movie = "movie",
  Series = "series",
}
