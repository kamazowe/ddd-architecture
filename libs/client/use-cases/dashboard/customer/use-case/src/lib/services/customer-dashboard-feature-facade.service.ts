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
import { Store as NgxsStore } from '@ngxs/store';
import { DashboardActions } from '@ddd-architecture/client/use-cases/dashboard/shared/state';

@Injectable()
export class CustomerDashboardFeatureFacade
  implements DashboardFeatureProvider
{
  dashboard$: Observable<UiDashboard> = this.dashboardViewQuery.dashboard$;

  constructor(
    private dashboardViewQuery: DashboardViewQuery,
    private store: Store<AuthState>,
    private dashboardState: NgxsStore
  ) {}

  profileActionClicked(value: string): void {
    this.store.dispatch(AuthDashboardPageActions.logout());
  }

  pageOpened(): void {
    this.dashboardState.dispatch(new DashboardActions.PageOpened());
  }

  pageClosed(): void {
    this.dashboardState.dispatch(new DashboardActions.PageClosed());
  }
}
