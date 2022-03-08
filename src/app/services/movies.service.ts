import { Injectable } from '@angular/core';
import config from 'src/config';
import axios from 'axios';
import { Category, MovieSeries } from 'src/interfaces/movie.series';
import { Trending } from 'src/interfaces/get.trending.dto';
import { GetMovies } from 'src/interfaces/get.movies.dto';
import { GetSeries } from 'src/interfaces/get.series.dto';


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
          name: item.title? item.title: item.name,
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
}
