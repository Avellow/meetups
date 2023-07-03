import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import { ButtonIconModule } from '../button-icon/button-icon.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';



@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    ButtonIconModule,
    ReactiveFormsModule,
    SpinnerModule
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SearchInputModule { }
