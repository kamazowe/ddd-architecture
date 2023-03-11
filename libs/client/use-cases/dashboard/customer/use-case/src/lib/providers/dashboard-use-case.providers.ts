import { UseCaseProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import {
  DashboardFeatureProvider,
  DashboardHeaderProvider,
  DashboardHeaderService,
  DashboardNavProvider,
  DashboardNavService,
} from '@ddd-architecture/client/use-cases/dashboard/shared/feature';
import { CustomerDashboardFeatureFacade } from '../services/customer-dashboard-feature-facade.service';
import { DashboardViewQuery } from '../services/dashboard-view.query';

export const dashboardUseCaseProviders: UseCaseProviders = [
  {
    provide: DashboardFeatureProvider,
    useClass: CustomerDashboardFeatureFacade,
  },
  { provide: DashboardHeaderProvider, useClass: DashboardHeaderService },
  { provide: DashboardNavProvider, useClass: DashboardNavService },
  DashboardViewQuery,
];
