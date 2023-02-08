import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  DashboardHeader,
  DashboardHeaderProvider,
} from '../providers/dashboard-header.provider';

// todo mock
const dashboardHeaderConst: DashboardHeader = {
  profileActions: [
    {
      label: 'logout',
      value: 'logout',
      enabled: true,
    },
  ],
};

@Injectable()
export class DashboardHeaderService implements DashboardHeaderProvider {
  dashboardHeader$: Observable<DashboardHeader> = of(dashboardHeaderConst);
}
