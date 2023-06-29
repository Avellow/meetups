import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginModule } from '../modules/login/login.module';
import { UsersPageComponent } from './users-page/users-page.component';
import { MeetupListPageComponent } from './meetup-list-page/meetup-list-page.component';
import { MeetupsListModule } from '../modules/meetups-list/meetups-list.module';
import { ButtonIconModule } from '../modules/button-icon/button-icon.module';
import { MyMeetupsPageComponent } from './my-meetups-page/my-meetups-page.component';
import { ButtonModule } from '../modules/button/button.module';




@NgModule({
  declarations: [
    LoginPageComponent,
    UsersPageComponent,
    MeetupListPageComponent,
    MyMeetupsPageComponent,
  ],
  imports: [
    CommonModule,
    LoginModule,
    MeetupsListModule,
    ButtonIconModule,
    ButtonModule
  ],
  exports: [
    LoginPageComponent,
    UsersPageComponent
  ]
})
export class PagesModule { }
