import { UseCaseProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import {
  DashboardFeatureProvider,
  DashboardHeaderProvider,
  DashboardHeaderService,
  DashboardNavProvider,
  DashboardNavService,
} from '@ddd-architecture/client/use-cases/dashboard/shared/feature';
import { DashboardFeatureService } from '../services/dashboard-feature.service';
import { DashboardViewQuery } from '../services/dashboard-view.query';

export const dashboardUseCaseProviders: UseCaseProviders = [
  { provide: DashboardFeatureProvider, useClass: DashboardFeatureService },
  { provide: DashboardHeaderProvider, useClass: DashboardHeaderService },
  { provide: DashboardNavProvider, useClass: DashboardNavService },
  DashboardViewQuery,
];
