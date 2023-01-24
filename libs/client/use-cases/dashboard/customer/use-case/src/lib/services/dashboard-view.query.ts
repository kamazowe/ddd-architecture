import {
  combineLatest,
  concatMap,
  map,
  Observable,
  of,
  OperatorFunction,
  switchMap,
  withLatestFrom,
} from 'rxjs';
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
import { CurrentUserDetailsApiProvider } from '@ddd-architecture/client/use-cases/current-user/details/shared/api';
import { GetCurrentUserResponsePayload } from '@ddd-architecture/shared/contracts';
import { concatLatestFrom } from '@ngrx/effects';

@Injectable()
export class DashboardViewQuery {
  dashboard$: Observable<UiDashboard> = this.getEmitters().pipe(
    // todo refactoring
    concatLatestFrom(([currentUser, _]) => [
      this.dashboardHeaderProvider.dashboardHeader$,
      this.dashboardNavProvider.nav$(currentUser.permissions),
    ]),
    map((payload) => this.getData(payload)),
    map((payload) => this.mapToViewResult(payload))
  );

  constructor(
    private dashboardNavProvider: DashboardNavProvider,
    private dashboardHeaderProvider: DashboardHeaderProvider,
    private breakpointsObserver: BreakpointsObserver,
    private currentUserDetailsApiProvider: CurrentUserDetailsApiProvider
  ) {}

  private getEmitters(): Observable<[GetCurrentUserResponsePayload, boolean]> {
    return combineLatest([
      this.currentUserDetailsApiProvider.currentUser$,
      this.breakpointsObserver.isMobile$,
    ]);
  }

  private getData([[currentUser, isMobile], dashboardHeader, dashboardNav]: [
    [GetCurrentUserResponsePayload, boolean],
    DashboardHeader,
    DashboardNav
  ]): [DashboardHeader, DashboardNav, GetCurrentUserResponsePayload, boolean] {
    return [dashboardHeader, dashboardNav, currentUser, isMobile];
  }

  private mapToViewResult([
    dashboardHeader,
    dashboardNav,
    currentUser,
    isMobile,
  ]: [
    DashboardHeader,
    DashboardNav,
    GetCurrentUserResponsePayload,
    boolean
  ]): UiDashboard {
    return {
      navbar: this.getUiNavbar(dashboardNav, currentUser),
      header: this.getUiHeader(dashboardHeader, currentUser, isMobile),
      isMobile: isMobile,
    };
  }

  private getUiNavbar(
    payload: DashboardNav,
    currentUser: GetCurrentUserResponsePayload
  ): UiNavbar {
    return {
      elements: payload.links.map((link) => ({
        path: link.path,
        label: link.label,
      })),
    };
  }

  private getUiHeader(
    payload: DashboardHeader,
    currentUser: GetCurrentUserResponsePayload,
    isMobile: boolean
  ): UiHeader {
    return {
      avatarUrl: currentUser.avatar?.src ?? null,
      buttonDropdownActionList: payload.profileActions
        .filter((action) => action.enabled)
        .map((action) => ({ value: action.value, label: action.label })),
      menuIconDisplayed: isMobile,
    };
  }
}
