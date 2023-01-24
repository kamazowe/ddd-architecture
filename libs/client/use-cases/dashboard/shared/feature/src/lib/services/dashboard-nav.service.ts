import { Injectable } from '@angular/core';
import {
  DashboardNav,
  DashboardNavProvider,
} from '../providers/dashboard-nav.provider';
import { of } from 'rxjs';
import { Permissions } from '@ddd-architecture/shared/contracts';

// todo mock
const dashboardNavConst: DashboardNav = {
  links: [
    {
      label: 'parts',
      path: 'parts',
      enabled: true,
    },
    {
      label: 'machines',
      path: 'machines',
      enabled: false,
    },
  ],
};

@Injectable()
export class DashboardNavService implements DashboardNavProvider {
  // TODO implement link filtering depending on current user permissions
  nav$ = (permissions: Permissions) => of(dashboardNavConst).pipe();
}
