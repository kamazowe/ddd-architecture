import { Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

// TODO refactoring
@Injectable()
export class EntryPointsNavigatorService {
  readonly mainPath = '/';
  readonly loginPath = 'auth/login';

  // TODO: analyze add abstraction for router
  constructor(private router: Router) {}

  goToMainPage(): void {
    this.router.navigate([this.mainPath]);
  }

  goToLoginPage(): void {
    this.router.navigate([this.loginPath]);
  }

  getMainPageUrlTree(): UrlTree {
    return this.router.createUrlTree([this.mainPath]);
  }

  getLoginPageUrlTree(): UrlTree {
    return this.router.createUrlTree([this.loginPath]);
  }
}
