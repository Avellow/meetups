import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginModule } from '../modules/login/login.module';
import { UsersPageComponent } from './users-page/users-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [
    LoginPageComponent,
    UsersPageComponent
  ]
})
export class PagesModule { }
