import { Observable } from 'rxjs';

export interface DashboardNavLink {
  path: string;
  label: string;
  enabled: boolean;
}

export interface DashboardNav {
  links: DashboardNavLink[];
}

export abstract class DashboardNavProvider {
  abstract nav$: Observable<DashboardNav>;
}
