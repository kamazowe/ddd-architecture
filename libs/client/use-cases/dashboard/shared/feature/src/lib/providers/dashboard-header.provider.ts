import { Observable } from 'rxjs';

export interface ProfileAction {
  value: string;
  label: string;
  enabled: boolean;
}

export interface DashboardHeader {
  profileActions: ProfileAction[];
}

export abstract class DashboardHeaderProvider {
  abstract dashboardHeader$: Observable<DashboardHeader>;
}
