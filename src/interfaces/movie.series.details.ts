export interface MovieSeriesDetail {
  id: number;
  backdrop_path: string;
  genres: string[];
  name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  tagline: string;
  vote_average: number;
  status: string;
  vote_count: number;
  // Series
  original_name?: string;
  episode_run_time?: number;
  first_air_date?: Date;
  in_production?: boolean;
  last_air_date?: Date;
  number_of_episodes?: number;
  number_of_seasons?: number;

  // Movies
  release_date?: Date;
  runtime?: number;
}

export interface Genre {
  id: number;
  name: string;
}
