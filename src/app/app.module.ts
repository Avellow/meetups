import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupModule } from './modules/meetup/meetup.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonIconModule } from './modules/button-icon/button-icon.module';
import { ButtonModule } from './modules/button/button.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeetupModule,
    ButtonIconModule,
    ButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
