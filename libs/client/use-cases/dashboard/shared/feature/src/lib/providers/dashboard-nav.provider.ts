import { Observable } from 'rxjs';
import { Permissions } from '@ddd-architecture/shared/contracts';

export interface DashboardNavLink {
  path: string;
  label: string;
  enabled: boolean;
}

export interface DashboardNav {
  links: DashboardNavLink[];
}

export abstract class DashboardNavProvider {
  abstract nav$: (permissions: Permissions) => Observable<DashboardNav>;
}
