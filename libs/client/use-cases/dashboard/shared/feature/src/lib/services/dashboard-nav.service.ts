import { Injectable } from '@angular/core';
import {
  DashboardNav,
  DashboardNavProvider,
} from '../providers/dashboard-nav.provider';
import { Observable, of } from 'rxjs';

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
  nav$: Observable<DashboardNav> = of(dashboardNavConst);
}
