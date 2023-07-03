import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoutePathsEnum } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.user) {
    return true;
  } else {
    router.navigate([RoutePathsEnum.LOGIN]);
    return false;
  }
};
