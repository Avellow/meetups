import { Component } from '@angular/core';
import { RoutePathsEnum } from 'src/app/app-routing.module';

@Component({
  selector: 'app-my-meetups-page',
  templateUrl: './my-meetups-page.component.html',
  styleUrls: ['./my-meetups-page.component.scss']
})
export class MyMeetupsPageComponent {
  routePaths = RoutePathsEnum;
}
