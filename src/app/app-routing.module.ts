import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetupsListComponent } from './modules/meetups-list/meetups-list.component';
import { authGuard } from './shared/guards/auth.guard';
import { LayoutModule } from './layout/layout.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PagesModule } from './pages/pages.module';
import { LayoutComponent } from './layout/layout.component';

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
      { path: RoutePathsEnum.LOGIN, component: LoginPageComponent },
      {
        path: RoutePathsEnum.MEETUPS,
        component: MeetupsListComponent,
        canActivate: [authGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule, PagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
