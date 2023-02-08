import { Observable } from 'rxjs';
import { DashboardFeatureProvider } from '@ddd-architecture/client/use-cases/dashboard/shared/feature';
import { UiDashboard } from '@ddd-architecture/client/use-cases/dashboard/shared/ui';
import { Injectable } from '@angular/core';
import { DashboardViewQuery } from './dashboard-view.query';
import {
  AuthDashboardPageActions,
  AuthState,
} from '@ddd-architecture/client/use-cases/auth/shared/data-access';
import { Store } from '@ngrx/store';

@Injectable()
export class DashboardFeatureService implements DashboardFeatureProvider {
  dashboard$: Observable<UiDashboard> = this.dashboardViewQuery.dashboard$;

  constructor(
    private dashboardViewQuery: DashboardViewQuery,
    private store: Store<AuthState>
  ) {}

  profileActionClicked(value: string): void {
    this.store.dispatch(AuthDashboardPageActions.logout());
  }
}
