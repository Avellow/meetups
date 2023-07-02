import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupFormComponent } from './meetup-form.component';
import { ButtonModule } from '../button/button.module';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MeetupFormComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    MeetupFormComponent
  ]
})
export class MeetupFormModule { }
