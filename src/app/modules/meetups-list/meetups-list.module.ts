import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupsListComponent } from './meetups-list.component';
import { MeetupModule } from '../meetup/meetup.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    MeetupsListComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    MeetupModule
  ],
  exports: [ MeetupsListComponent ]
})
export class MeetupsListModule { }
