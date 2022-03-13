import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Category, MovieSeries } from 'src/interfaces/movie.series';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  category = Category.ANY;
  catalog: MovieSeries[] | undefined;
  movie_series: MovieSeries[] | undefined;
  movieService = new MoviesService();

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.category = this.route.url.includes("/series") ?
      Category.SERIES :
      Category.MOVIE;

    this.filterCatalog(this.category).then( result => this.catalog = result);
  }

  async filterCatalog(filter: Category) {
    let catalog: MovieSeries[] | undefined;

    switch (filter) {
      case Category.MOVIE:
        catalog = await this.movieService.getMovies();
        break;
      case Category.SERIES:
        catalog = await this.movieService.getSeries();
        break;
      default:
        break;
    }
    this.movie_series = catalog;
    return catalog;
  }

  searchCatalog(searchEvent: string): void {
    //this.catalog = this.movieService.searchContent(searchEvent);
    this.catalog = this.movie_series?.filter(item => {
      return item.name?.toLowerCase().includes(searchEvent.toLowerCase());
    });
  }
}
