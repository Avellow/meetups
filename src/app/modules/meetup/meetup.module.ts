import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupComponent } from './meetup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ButtonModule } from '../button/button.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MeetupComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PipesModule,
    ButtonModule,
    RouterModule
  ],
  exports: [MeetupComponent]
})
export class MeetupModule { }
