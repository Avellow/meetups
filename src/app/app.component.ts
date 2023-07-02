import { Component, OnInit } from '@angular/core';
import { MeetupsService } from './services/meetups.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAppLoading = false;

  constructor(
    public meetupsServ: MeetupsService,
    public usersServ: UsersService
  ) {}

  ngOnInit(): void {
    this.meetupsServ.isLoadingSubj$.subscribe((isLoading) => {
      this._handleLoader(isLoading);
    });
  
    this.usersServ.isLoadingSubj$.subscribe((isLoading) => {
      this._handleLoader(isLoading);
    });
  }
  
  private _handleLoader(isLoading: boolean): void {
    // таймер ДЛЯ ДЕМОНСТРАЦИИ ЛОАДЕРА!!!
    if (!isLoading) {
      setTimeout(() => (this.isAppLoading = isLoading), 500);
    } else {
      this.isAppLoading = isLoading;
    }

  }
}
