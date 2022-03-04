import { Component, Input, OnInit } from '@angular/core';
import { Category, MovieSeries } from 'src/interfaces/movie.series';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() catalog: MovieSeries[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
