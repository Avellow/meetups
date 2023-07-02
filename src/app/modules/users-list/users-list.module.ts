import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ButtonIconModule } from '../button-icon/button-icon.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UserItemComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ButtonIconModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersListModule { }
