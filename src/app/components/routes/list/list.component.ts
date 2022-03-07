import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import series from 'src/app/series.json';
import movies from 'src/app/movies.json';
import { Category, MovieSeries } from 'src/interfaces/movie.series';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  category = Category.ANY;
  catalog: MovieSeries[] | undefined;



  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.category = this.route.url.includes("/series") ?
      Category.SERIES :
      Category.MOVIE;

    this.catalog = this.filterCatalog( this.category);
  }

  filterCatalog(filter: Category) {
    let catalog = this.setMovieSeries();

    switch (filter) {
      case Category.MOVIE:
        catalog = catalog.filter(element => {
          return element.category === Category.MOVIE
        });
        break;
      case Category.SERIES:
        catalog = catalog?.filter(element => {
          return element.category === Category.SERIES
        });
        break;
      default:
        catalog = catalog;
        break;
    }

    return catalog
  }

  setMovieSeries(): MovieSeries[] {
    const movies_series = movies.map(movie => {
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

    return movies_series;
  }

  searchCatalog(searchEvent: string): void {
    this.catalog = this.setMovieSeries().filter(item => {
      return item.name.toLowerCase().includes(searchEvent.toLowerCase()) &&
        (item.category === this.category);
    })
  }
}
