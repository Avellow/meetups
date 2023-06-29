import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { LayoutModule } from './layout/layout.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PagesModule } from './pages/pages.module';
import { LayoutComponent } from './layout/layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { adminGuard } from './shared/guards/admin.guard';
import { MeetupListPageComponent } from './pages/meetup-list-page/meetup-list-page.component';
import { MyMeetupsPageComponent } from './pages/my-meetups-page/my-meetups-page.component';

export enum RoutePathsEnum {
  LOGIN = 'login',
  MEETUPS = 'meetups',
  MY_MEETUPS = 'my-meetups',
  DASHBOARD_USERS = 'dashboard-users',
}

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: RoutePathsEnum.LOGIN, 
        component: LoginPageComponent 
      },
      {
        path: RoutePathsEnum.MEETUPS,
        component: MeetupListPageComponent,
        canActivate: [authGuard],
      },
      {
        path: RoutePathsEnum.MY_MEETUPS, 
        component: MyMeetupsPageComponent
      },
      {
        path: RoutePathsEnum.DASHBOARD_USERS,
        component: UsersPageComponent,
        canActivate: [adminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule, PagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
