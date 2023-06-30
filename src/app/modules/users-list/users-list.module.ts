import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ButtonIconModule } from '../button-icon/button-icon.module';



@NgModule({
  declarations: [
    UsersListComponent,
    UserItemComponent
  ],
  imports: [
    CommonModule,
    ButtonIconModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersListModule { }
