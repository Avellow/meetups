import { Component } from '@angular/core';
import { RoutePathsEnum } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  paths = RoutePathsEnum;
  showSettings = false;

  constructor(public authService: AuthService, public themeServ: ThemeService) { }
  
  toggleShowSettings() {
    this.showSettings = !this.showSettings;
  }

  toggleTheme() {
    this.themeServ.toggleTheme();
  }
}
