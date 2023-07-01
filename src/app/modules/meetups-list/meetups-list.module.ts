import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupsListComponent } from './meetups-list.component';
import { MeetupModule } from '../meetup/meetup.module';

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
