import { UiDashboard } from '@ddd-architecture/client/use-cases/dashboard/shared/ui';
import { Observable } from 'rxjs';

export abstract class DashboardFeatureProvider {
  abstract dashboard$: Observable<UiDashboard>;
}
