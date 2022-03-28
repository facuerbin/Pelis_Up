import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Category, MovieSeries } from 'src/interfaces/movie.series';
import { AddEvent } from '../../shared/cards/cards.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  category = Category.ANY;
  catalog: MovieSeries[] = [];
  addedItems: MovieSeries[] = []

  constructor(
    private route: Router,
    private movieService: MoviesService,
    private auth: AuthService
  ) { }

  async ngOnInit(): Promise<void> {
    this.category = this.route.url.includes("/series") ?
      Category.SERIES :
      Category.MOVIE;
    const uid = this.auth.getUser()?.uid;
    if (uid) {
      this.addedItems = (await this.auth.getItems(uid)).list || [];
    }
    this.catalog = this.addedItems.filter(item => item.category === this.category);
  }

  async searchCatalog(searchEvent: string): Promise<void> {
    this.catalog = await this.movieService.searchContent(searchEvent, this.category);
  }

  removeItem(event: AddEvent) {
    this.auth.addItem(event.id, event.category);
  }
}
