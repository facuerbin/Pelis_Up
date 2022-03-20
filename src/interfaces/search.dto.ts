export interface SearchResults {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface Result {
  backdrop_path:     string;
  genre_ids:         number[];
  original_language: string;
  id:                number;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  vote_average:      number;
  vote_count:        number;

  // Movies only
  adult:             boolean;
  original_title:    string;
  release_date:      Date;
  title:             string;
  video:             boolean;

  // Series only
  first_air_date:    Date;
  name:              string;
  origin_country:    string[];
  original_name:     string;
}
