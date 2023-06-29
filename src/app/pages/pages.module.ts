import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginModule } from '../modules/login/login.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class PagesModule { }
