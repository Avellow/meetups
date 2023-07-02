import { Component, OnInit } from '@angular/core';
import { MeetupsService } from './services/meetups.service';
import { UsersService } from './services/users.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  constructor(public themeServ: ThemeService) {}
}
