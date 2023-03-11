import {
  UiDashboard,
  UiHeaderProvider,
} from '@ddd-architecture/client/use-cases/dashboard/shared/ui';
import { Observable } from 'rxjs';

export abstract class DashboardFeatureProvider implements UiHeaderProvider {
  abstract dashboard$: Observable<UiDashboard>;

  abstract profileActionClicked(value: string): void;
  abstract pageOpened(): void;
  abstract pageClosed(): void;
}
