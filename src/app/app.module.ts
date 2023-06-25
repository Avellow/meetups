import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupModule } from './modules/meetup/meetup.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonIconModule } from './modules/button-icon/button-icon.module';
import { ButtonModule } from './modules/button/button.module';
import { MeetupsListModule } from './modules/meetups-list/meetups-list.module';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeetupModule,
    MeetupsListModule,
    ButtonIconModule,
    ButtonModule,
    NgbModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
