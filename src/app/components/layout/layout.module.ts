import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../routes/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BackgroundComponent } from './background/background.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BackgroundComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BackgroundComponent
  ]
})
export class LayoutModule { }
