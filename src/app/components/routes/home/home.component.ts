import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Category, MovieSeries } from 'src/interfaces/movie.series';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies_series: MovieSeries[] | undefined;
  catalog: MovieSeries[] | undefined;
  movieService = new MoviesService();

  filter = 1;
  activeFilter = [Category.ANY, Category.MOVIE, Category.SERIES];

  constructor() { }

  ngOnInit(): void {
    this.filterCatalog(this.getActiveSection());
  }

  filterHandler(id: number) {
    this.filter = id;
    this.filterCatalog(this.getActiveSection());
  }

  async filterCatalog(filter: string) {
    switch (filter) {
      case "Películas":
        this.movies_series = await this.movieService.getMovies();
        break;
      case "Series":
        this.movies_series = await this.movieService.getSeries();
        break;
      default:
        this.movies_series = await this.movieService.getTrending();
        break;
    }

    return this.catalog = this.movies_series;
  }

  searchCatalog(searchEvent: string): void {
    this.catalog = this.movies_series?.filter(item => {
      return item.name?.toLowerCase().includes(searchEvent.toLowerCase()) &&
        (item.category === this.getActiveSection() || this.getActiveSection() === Category.ANY);
    });
  }


  getActiveSection() {
    return this.activeFilter[this.filter - 1];
  }
}
