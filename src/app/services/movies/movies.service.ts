import { Injectable } from '@angular/core';
import config from 'src/config';
import axios from 'axios';
import { Category, MovieSeries } from 'src/interfaces/movie.series';
import { Trending } from 'src/interfaces/get.trending.dto';
import { GetMovies } from 'src/interfaces/get.movies.dto';
import { GetSeries } from 'src/interfaces/get.series.dto';
import { GetSeriesDetail } from 'src/interfaces/get.series.detail.dto';
import { MovieSeriesDetail } from 'src/interfaces/movie.series.details';
import { GetMovieDetail } from 'src/interfaces/get.movie.detail.dto';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  async getTrending(): Promise<MovieSeries[]> {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${config.apiKey}`;
    const result = await axios.get(url);
    return result.data.results?.map((item: Trending) => {
      {
        return {
          id: item.id,
          name: item.title ? item.title : item.name,
          description: item.overview,
          image: item.poster_path,
          rating: item.vote_average,
          category: item.media_type === "movie" ? Category.MOVIE : Category.SERIES
        }
      }
    }
    );
  }

  async getMovies(): Promise<MovieSeries[]> {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${config.apiKey}&language=${config.apiLanguage}`;
    const result: GetMovies = (await axios.get(url)).data;
    return result.results?.map((item) => {
      {
        return {
          id: item.id,
          name: item.title,
          description: item.overview,
          image: item.poster_path,
          rating: item.vote_average,
          category: Category.MOVIE
        }
      }
    }
    );
  }

  async getSeries(): Promise<MovieSeries[]> {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${config.apiKey}&language=${config.apiLanguage}&page=1`;
    const result: GetSeries = (await axios.get(url)).data;
    return result.results?.map((item) => {
      {
        return {
          id: item.id,
          name: item.name ? item.name : item.original_name,
          description: item.overview,
          image: item.poster_path,
          rating: item.vote_average,
          category: Category.SERIES
        }
      }
    }
    );
  }

  async getSeriesById(id: string): Promise<MovieSeriesDetail> {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${config.apiKey}&language=${config.apiLanguage}`;
    const result: GetSeriesDetail = (await axios.get(url)).data;

    return {
      id: result.id,
      backdrop_path: result.backdrop_path,
      episode_run_time: result.episode_run_time[0],
      first_air_date: result.first_air_date,
      genres: result.genres.map(genre => genre.name),
      in_production: result.in_production,
      last_air_date: result.last_air_date,
      name: result.name,
      number_of_episodes: result.number_of_episodes,
      number_of_seasons: result.number_of_seasons,
      original_name: result.original_name,
      overview: result.overview,
      popularity: result.popularity,
      poster_path: result.poster_path,
      tagline: result.tagline,
      status: result.status,
      vote_average: result.vote_average,
      vote_count: result.vote_count,
    }
  }

  async getMoviesById(id: string): Promise<MovieSeriesDetail> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.apiKey}&language=${config.apiLanguage}`;
    const result: GetMovieDetail = (await axios.get(url)).data;

    return {
      id: result.id,
      backdrop_path: result.backdrop_path,
      name: result.title,
      overview: result.overview,
      popularity: result.popularity,
      poster_path: result.poster_path,
      tagline: result.tagline,
      vote_average: result.vote_average,
      status: result.status,
      vote_count: result.vote_count,
      release_date: result.release_date,
      runtime: result.runtime,
      genres: result.genres.map(genre => genre.name)
    }
  }
}
