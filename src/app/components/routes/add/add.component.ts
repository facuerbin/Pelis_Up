import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Category, MovieSeries } from 'src/interfaces/movie.series';
import { AddEvent } from '../../shared/cards/cards.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  catalog: MovieSeries[] = []
  addedItems: MovieSeries[] = []


  constructor(private movieService: MoviesService, private auth: AuthService) { }

  async ngOnInit(): Promise<void> {
    const uid = this.auth.getUser()?.uid;
    if (uid) {
      this.addedItems = (await this.auth.getItems(uid)).list || [];
    }
  }

  async searchCatalog(searchEvent: string): Promise<void> {
    this.catalog = await this.movieService.searchContent(searchEvent, Category.ANY);
  }

  addItem(addEvent: AddEvent) {
    this.auth.addItem(addEvent.id, addEvent.category);
  }

}
