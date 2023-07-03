import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  isUsersLoading = false;

  constructor(private usersServ: UsersService) {}

  private onDestroy$: Subject<void> = new Subject();

  ngOnInit(): void {
    this.usersServ.isLoadingSubj$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((isLoading) => {
        this._handleLoader(isLoading);
      });
  }

  private _handleLoader(isLoading: boolean): void {
    // таймер ДЛЯ ДЕМОНСТРАЦИИ ЛОАДЕРА!!!
    if (!isLoading) {
      setTimeout(() => (this.isUsersLoading = isLoading), 500);
    } else {
      this.isUsersLoading = isLoading;
    }
  }
}
