import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Category, MovieSeries } from 'src/interfaces/movie.series';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  catalog: MovieSeries[] = []
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }

  async searchCatalog(searchEvent: string): Promise<void> {
    this.catalog = await this.movieService.searchContent(searchEvent, Category.ANY);
  }

  addItem(addEvent: string) {
    console.log("Add item event " + addEvent.toString() )

  }

}
