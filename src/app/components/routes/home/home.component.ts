import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  // Icons
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
