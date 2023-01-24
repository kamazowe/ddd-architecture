import { combineLatest, map, Observable } from 'rxjs';
import {
  UiDashboard,
  UiHeader,
  UiNavbar,
} from '@ddd-architecture/client/use-cases/dashboard/shared/ui';
import { Injectable } from '@angular/core';
import {
  DashboardHeader,
  DashboardHeaderProvider,
  DashboardNav,
  DashboardNavProvider,
} from '@ddd-architecture/client/use-cases/dashboard/shared/feature';
import { BreakpointsObserver } from '@ddd-architecture/client/shared/infrastructure/breakpoints';

@Injectable()
export class DashboardViewQuery {
  dashboard$: Observable<UiDashboard> = this.getEmitters().pipe(
    map((payload) => this.mapToViewResult(payload))
  );

  constructor(
    private dashboardNavProvider: DashboardNavProvider,
    private dashboardHeaderProvider: DashboardHeaderProvider,
    private breakpointsObserver: BreakpointsObserver
  ) {}

  private getEmitters(): Observable<[DashboardHeader, DashboardNav, boolean]> {
    return combineLatest([
      this.dashboardHeaderProvider.dashboardHeader$,
      this.dashboardNavProvider.nav$,
      this.breakpointsObserver.isMobile$,
    ]);
  }

  private mapToViewResult([dashboardHeader, dashboardNav, isMobile]: [
    DashboardHeader,
    DashboardNav,
    boolean
  ]): UiDashboard {
    return {
      navbar: this.getUiNavbar(dashboardNav),
      header: this.getUiHeader(dashboardHeader, isMobile),
      isMobile: isMobile,
    };
  }

  private getUiNavbar(payload: DashboardNav): UiNavbar {
    return {
      elements: payload.links
        .filter((action) => action.enabled)
        .map((action) => ({ path: action.path, label: action.label })),
    };
  }

  private getUiHeader(payload: DashboardHeader, isMobile: boolean): UiHeader {
    // todo avatar mock
    return {
      avatarUrl: null,
      buttonDropdownActionList: payload.profileActions
        .filter((action) => action.enabled)
        .map((action) => ({ value: action.value, label: action.label })),
      menuIconDisplayed: isMobile,
    };
  }
}
