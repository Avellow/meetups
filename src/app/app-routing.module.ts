import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MeetupsListComponent } from './modules/meetups-list/meetups-list.component';
import { authGuard } from './shared/guards/auth.guard';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutModule } from './layout/layout.module';

export enum RoutePathsEnum {
  LOGIN = 'login',
  MEETUPS = 'meetups',
  MY_MEETUPS = "my-meetups",
  DASHBOARD_USERS = 'dashboard-users'
}

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: RoutePathsEnum.LOGIN, component: LoginComponent },
      {
        path: RoutePathsEnum.MEETUPS,
        component: MeetupsListComponent,
        canActivate: [authGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
