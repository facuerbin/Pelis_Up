import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MovieSeries } from 'src/interfaces/movie.series';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() catalog: MovieSeries[] | undefined;
  @Output() addItemEvent = new EventEmitter<string>();
  @Input() isLoggedRoute: boolean = false;
  starIcon = faStar;
  plusIcon = faPlus;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        this.isLoggedRoute = event.url.includes("dashboard")
      };
    })
  }

  checkLoggedRoute () {
    return this.isLoggedRoute;
  }
}
