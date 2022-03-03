import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: "peliculas", component:MoviesComponent
  },
  {
    path: "series", component:SeriesComponent
  },
  {
    path: "login", component:LoginComponent
  },
  {
    path: "", component:HomeComponent
  },
  {
    path: "*", component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
