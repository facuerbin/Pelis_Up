import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';
import config from 'src/config';
import { Category } from 'src/interfaces/movie.series';
import { MovieSeriesDetail } from 'src/interfaces/movie.series.details';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  category: Category | undefined;
  movieService = new MoviesService();
  item: MovieSeriesDetail | undefined;
  bannerImage: string | undefined;
  posterImage: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const category = this.router.url.includes("series") ? Category.SERIES : Category.MOVIE;
    this.category = category;

    this.route.params.subscribe((async params => {
      if (category === Category.SERIES) {
        this.movieService.getSeriesById((params['id']))
          .then(result => {
            this.item = result
            this.bannerImage = `https://image.tmdb.org/t/p/w780/${this.item.backdrop_path}?api_key=${config.apiKey}}`;
            this.posterImage = `https://image.tmdb.org/t/p/w780/${this.item.poster_path}?api_key=${config.apiKey}}`;
          })
          .catch(e => {
            console.log(e)
            //this.router.navigate(['/'])
          });

      } else {
        this.movieService.getMoviesById((params['id']))
          .then(result => {
            this.item = result
            this.bannerImage = `https://image.tmdb.org/t/p/w780/${this.item.backdrop_path}?api_key=${config.apiKey}}`;
            this.posterImage = `https://image.tmdb.org/t/p/w780/${this.item.poster_path}?api_key=${config.apiKey}}`;
          })
          .catch(e => {
            console.log(e)
            //this.router.navigate(['/'])
          });
      }
    }));

  }

}
