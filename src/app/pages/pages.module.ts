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
import { RouterModule } from '@angular/router';
import { CreateMeetupPageComponent } from './create-meetup-page/create-meetup-page.component';
import { MeetupFormModule } from '../modules/meetup-form/meetup-form.module';
import { UsersListModule } from '../modules/users-list/users-list.module';
import { EditMeetupPageComponent } from './edit-meetup-page/edit-meetup-page.component';
import { SearchInputModule } from '../modules/search-input/search-input.module';
import { HomeComponent } from './home/home.component';
import { SpinnerModule } from '../shared/spinner/spinner.module';




@NgModule({
  declarations: [
    LoginPageComponent,
    UsersPageComponent,
    MeetupListPageComponent,
    MyMeetupsPageComponent,
    CreateMeetupPageComponent,
    EditMeetupPageComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginModule,
    MeetupsListModule,
    ButtonIconModule,
    ButtonModule,
    MeetupFormModule,
    UsersListModule,
    SearchInputModule,
    SpinnerModule
  ],
})
export class PagesModule { }
