import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MeetupsListComponent } from './modules/meetups-list/meetups-list.component';
import { authGuard } from './shared/guards/auth.guard';

export enum RoutePathsEnum {
  LOGIN = 'login',
  MEETUPS = 'meetups'
}

const routes: Routes = [
  {path: RoutePathsEnum.LOGIN, component: LoginComponent},
  {path: RoutePathsEnum.MEETUPS, component: MeetupsListComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
