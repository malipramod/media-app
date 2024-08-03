export type ResponseType = "True" | "False";

export interface MediaError {
  Response: ResponseType;
  Error: string;
}

export interface MediaSearchResult extends MediaError {
  Search: Array<MedialDetailBase>;
  totalResults: string;
}

export interface MedialDetailBase {
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

export interface MediaDetails extends MedialDetailBase {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  BoxOffice: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Array<Rating>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  totalSeasons: string;
}

export interface Rating {
  Source: string;
  Value: string;
}
