import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupComponent } from './meetup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    MeetupComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PipesModule
  ],
  exports: [MeetupComponent]
})
export class MeetupModule { }
