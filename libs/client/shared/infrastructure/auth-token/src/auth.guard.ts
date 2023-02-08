import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { EntryPointsNavigatorService } from '@ddd-architecture/client/shared/infrastructure/router';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthTokenService,
    private navigatorService: EntryPointsNavigatorService
  ) {}

  canActivate(): boolean | UrlTree {
    return this.authService.isLoggedInUser()
      ? true
      : this.navigatorService.getLoginPageUrlTree();
  }
}
