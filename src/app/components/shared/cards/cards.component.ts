import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Category, MovieSeries } from 'src/interfaces/movie.series';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() catalog: MovieSeries[] = [];
  @Output() addItemEvent = new EventEmitter<AddEvent>();
  @Input() isLoggedRoute: boolean = false;
  @Input() addedItems: MovieSeries[] = [];
  starIcon = faStar;
  plusIcon = faPlus;
  minusIcon = faMinus;

  toggleAddButton = true;


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

  handleAddItem(id: number, category: Category) {
    this.addItemEvent.emit({id, category});
    this.toggleAddButton = ! this.toggleAddButton;
  }

  checkAddedItem(itemId: number, itemCategory: Category) {

    return this.addedItems.filter( item => item.id === itemId && item.category === itemCategory).length === 0;
  }

}

export interface AddEvent {
  id: number,
  category: Category
}
