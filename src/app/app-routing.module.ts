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
import { MeetupFormComponent } from './modules/meetup-form/meetup-form.component';
import { ButtonModule } from './modules/button/button.module';
import { CreateMeetupPageComponent } from './pages/create-meetup-page/create-meetup-page.component';

export enum RoutePathsEnum {
  LOGIN = 'login',
  MEETUPS = 'meetups',
  MY_MEETUPS = 'my-meetups',
  DASHBOARD_USERS = 'dashboard-users',
  CREATE_MEETUP = 'create-meetup'
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
        canActivate: [authGuard],
        children: [
          {
            path: '',
            component: MyMeetupsPageComponent,
            pathMatch: 'full'
          },
          {
            path: RoutePathsEnum.CREATE_MEETUP, 
            component: CreateMeetupPageComponent,
          }
        ]
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
  imports: [RouterModule.forRoot(routes), LayoutModule, PagesModule, ButtonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
