import { Component } from '@angular/core';
import { RoutePathsEnum } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  paths = RoutePathsEnum;

  constructor(public authService: AuthService) {}
}
