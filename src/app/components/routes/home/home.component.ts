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

  filter = 1;
  category = Category.ANY;
  categories = [Category.ANY, Category.MOVIE, Category.SERIES];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.filterCatalog(this.getActiveCategory());
  }

  filterHandler(index: number) {
    this.setActiveCategory(index);
    this.filterCatalog(this.getActiveCategory());
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

  async searchCatalog(searchEvent: string): Promise<void> {
    this.catalog = await this.movieService.searchContent(searchEvent, this.category);
  }


  getActiveCategory() {
    return this.category;
  }

  setActiveCategory(filter: number) {
    this.filter = filter;
    this.category = this.categories[filter -1];
  }
}
