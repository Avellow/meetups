import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginModule } from '../modules/login/login.module';
import { UsersPageComponent } from './users-page/users-page.component';
import { MeetupListPageComponent } from './meetup-list-page/meetup-list-page.component';
import { MeetupsListModule } from '../modules/meetups-list/meetups-list.module';
import { ButtonIconModule } from '../modules/button-icon/button-icon.module';




@NgModule({
  declarations: [
    LoginPageComponent,
    UsersPageComponent,
    MeetupListPageComponent,

  ],
  imports: [
    CommonModule,
    LoginModule,
    MeetupsListModule,
    ButtonIconModule
  ],
  exports: [
    LoginPageComponent,
    UsersPageComponent
  ]
})
export class PagesModule { }
