import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { MovieSeries } from 'src/interfaces/movie.series';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() catalog: MovieSeries[] | undefined;
  starIcon = faStar;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
