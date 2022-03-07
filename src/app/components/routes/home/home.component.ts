import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Category, MovieSeries } from 'src/interfaces/movie.series';
import movies from 'src/app/movies.json';
import series from 'src/app/series.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies_series: MovieSeries[] | undefined;
  catalog: MovieSeries[] | undefined;

  // Icons
  searchIcon = faSearch;

  filter = 1;
  activeFilter = [Category.ANY, Category.MOVIE, Category.SERIES]

  constructor() { }

  ngOnInit(): void {
    this.setMovieSeries();
    this.catalog = this.movies_series;
  }

  filterHandler(id: number) {
    this.filter = id;
    this.catalog = this.filterCatalog(this.getActiveSection());

    return true;
  }

  filterCatalog(filter: string) {
    let catalog: MovieSeries[] | undefined;

    switch (filter) {
      case "Películas":
        catalog = this.movies_series?.filter(element => {
          return element.category === Category.MOVIE
        });
        break;
      case "Series":
        catalog = this.movies_series?.filter(element => {
          return element.category === Category.SERIES
        });
        break;
      default:
        catalog = this.movies_series;
        break;
    }

    return catalog
  }

  searchCatalog(searchEvent: string): void {
    this.catalog = this.movies_series?.filter(item => {
      return item.name.toLowerCase().includes(searchEvent.toLowerCase()) &&
        (item.category === this.getActiveSection() || this.getActiveSection() === Category.ANY);
    })
  }

  setMovieSeries(): void {
    this.movies_series = movies.map(movie => {
      return {
        id: movie.id,
        name: movie.title,
        description: movie.overview,
        image: movie.poster_path,
        rating: movie.vote_average,
        category: Category.MOVIE
      }
    }).concat(
      series.map(tvShow => {
        return {
          id: tvShow.id,
          name: tvShow.name,
          description: tvShow.overview,
          image: tvShow.poster_path,
          rating: tvShow.vote_average,
          category: Category.SERIES
        }
      })
    );
  }

  getActiveSection() {
    return this.activeFilter[this.filter - 1];
  }
}
