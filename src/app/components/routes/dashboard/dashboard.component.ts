import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Category, MovieSeries } from 'src/interfaces/movie.series';
import { User } from 'src/interfaces/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: MovieSeries[] = [];
  series: MovieSeries[] = [];
  constructor(private auth: AuthService) { }

  async ngOnInit(): Promise<void> {
    const user = this.auth.getUser();
    const data : User = await this.auth.getItems(user?.uid || "");
    if (data && data.list) {
      this.movies = data.list.filter( element => element.category === Category.MOVIE);
      this.series = data.list.filter( element => element.category === Category.SERIES);
    }

  }

}
