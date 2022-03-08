export interface Trending {
  title?:            string;
  vote_average:      number;
  id:                number;
  overview:          string;
  release_date?:     Date;
  adult?:            boolean;
  backdrop_path:     string;
  vote_count:        number;
  genre_ids:         number[];
  video?:            boolean;
  original_language: OriginalLanguage;
  original_title?:   string;
  poster_path:       string;
  popularity:        number;
  media_type:        MediaType;
  name?:             string;
  original_name?:    string;
  origin_country?:   string[];
  first_air_date?:   Date;
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}

export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
  Ko = "ko",
}
