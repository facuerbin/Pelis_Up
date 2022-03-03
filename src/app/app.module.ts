import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/routes/home/home.component';
import { MoviesComponent } from './components/routes/movies/movies.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { LoginComponent } from './components/routes/login/login.component';
import { LayoutModule } from './components/layout/layout.module';
import { SharedModule } from './components/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    LayoutModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
