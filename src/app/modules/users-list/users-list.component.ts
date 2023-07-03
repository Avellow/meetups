import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from './user-item/user.interface';
import { Subject, takeUntil } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  users: IUser[];
  isAddingNewUser = false;

  private onDestroy$: Subject<void> = new Subject();

  constructor(private usersServ: UsersService) {
    this.users = this.usersServ.users;
  }

  ngOnInit(): void {
    this.usersServ.usersSubject$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((users) => {
        this.users = users;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  handleChangeIsAddingNewUser() {
    this.isAddingNewUser = !this.isAddingNewUser;
  }

}
