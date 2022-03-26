import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/routes/home/home.component';
import { ListComponent } from './components/routes/list/list.component';
import { LoginComponent } from './components/routes/login/login.component';
import { LayoutModule } from './components/layout/layout.module';
import { SharedModule } from './components/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailComponent } from './components/routes/detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import config from 'src/config';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { DashboardComponent } from './components/routes/dashboard/dashboard.component';
import { ErrorComponent } from './components/routes/error/error.component';
import { AddComponent } from './components/routes/add/add.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    LoginComponent,
    DetailComponent,
    DashboardComponent,
    ErrorComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule,
    LayoutModule,
    SharedModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
