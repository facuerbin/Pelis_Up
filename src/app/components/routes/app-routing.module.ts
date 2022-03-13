import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "peliculas", component:ListComponent
  },
  {
    path: "peliculas/:id", component:DetailComponent
  },
  {
    path: "series", component:ListComponent
  },
  {
    path:"series/:id", component:DetailComponent
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
  {
    path: "dashboard", component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
