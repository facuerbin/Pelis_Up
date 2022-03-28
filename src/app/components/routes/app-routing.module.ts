import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { AddComponent } from './add/add.component';
import { UserListComponent } from './user-list/user-list.component';

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
    path: "dashboard", component:DashboardComponent
  },
  {
    path: "dashboard/add", component:AddComponent
  },
  {
    path: "dashboard/peliculas", component:UserListComponent
  },
  {
    path: "dashboard/series", component:UserListComponent
  },
  {
    path: "**", component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
