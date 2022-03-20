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
  catalog: MovieSeries[] = [];
  movie_series: MovieSeries[] = [];

  constructor(
    private route: Router,
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.category = this.route.url.includes("/series") ?
      Category.SERIES :
      Category.MOVIE;

    this.filterCatalog(this.category).then(result => this.catalog = result || []);
  }

  async filterCatalog(filter: Category) {
    let catalog: MovieSeries[] = [];

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

  async searchCatalog(searchEvent: string): Promise<void> {
    this.catalog = await this.movieService.searchContent(searchEvent, this.category);
  }
}
