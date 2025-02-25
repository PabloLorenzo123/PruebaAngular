import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const accessToken: string | null = localStorage.getItem("accessToken");
  const authService = inject(AuthService);

  if (accessToken) {
    const decodedAccessToken = jwtDecode(accessToken);
    const tokenExpiration: any = decodedAccessToken.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration < now) {
      router.navigate(['/login']);
      return false;
    }

    if (!authService.getUser()) {
      authService.fetchUser();
    }

    return true
  }

  router.navigate(['/login']);
  return false
};