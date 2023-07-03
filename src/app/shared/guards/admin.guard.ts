import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoutePathsEnum } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAdmin) {
    return true;
  } else if (authService.isAuth) {
    router.navigate([RoutePathsEnum.MEETUPS]);
    return false;
  } else {
    router.navigate([RoutePathsEnum.LOGIN]);
    return false;
  }
};
