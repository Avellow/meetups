import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import { ButtonIconModule } from '../button-icon/button-icon.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    ButtonIconModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SearchInputModule { }
