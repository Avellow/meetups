import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupFormComponent } from './meetup-form.component';
import { ButtonModule } from '../button/button.module';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MeetupFormComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    MeetupFormComponent
  ]
})
export class MeetupFormModule { }
