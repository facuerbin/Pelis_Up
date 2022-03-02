import { Component } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Icons
  arrowRight = faArrowRight;
  searchIcon = faSearch;


  isActive = 1;
  sections = ["Todos", "Películas", "Series"];

  buttonActive (id : number) {
    this.isActive = id;
    console.log("it works")
    return true;
  }

  getActiveSection () {
    return this.sections[this.isActive - 1];
  }
}
