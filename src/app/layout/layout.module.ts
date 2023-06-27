import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonIconModule } from '../modules/button-icon/button-icon.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonIconModule
  ], 
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
