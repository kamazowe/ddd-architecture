import { first, Observable } from 'rxjs';
import {
  CallState,
  filterCallState,
  LoadingState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { AuthLoginFeatureProvider } from '../providers/auth-login-feature.provider';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UiLoginFormValue } from '@ddd-architecture/client/use-cases/auth/shared/ui';
import {
  AuthLoginPageActions,
  AuthSelectors,
  AuthState,
} from '@ddd-architecture/client/use-cases/auth/shared/data-access';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthLoginFeatureService implements AuthLoginFeatureProvider {
  private readonly pageForLoggedInUserUrl = 'dashboard';

  loginCallState$: Observable<CallState> = this.store.select(
    AuthSelectors.selectLoginCallState);

  constructor(private store: Store<AuthState>, private router: Router) {}

  login(payload: UiLoginFormValue): void {
    this.store.dispatch(AuthLoginPageActions.login({ payload }));
    this.store
      .select(AuthSelectors.selectLoginCallState)
      .pipe(
        filterCallState([LoadingState.LOADED]),
        first()
        // todo add until destroy
      )
      .subscribe(() => this.router.navigate([this.pageForLoggedInUserUrl]));
  }
}
