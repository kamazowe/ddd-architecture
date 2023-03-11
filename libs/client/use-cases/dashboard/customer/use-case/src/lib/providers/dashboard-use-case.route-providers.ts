import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { currentUserDetailsApiRouteProviders } from '@ddd-architecture/client/use-cases/current-user/details/shared/api';
import { authStoreProviders } from '@ddd-architecture/client/use-cases/auth/shared/data-access';
import { dashboardStateProviders } from '@ddd-architecture/client/use-cases/dashboard/shared/state';

export const dashboardUseCaseRouteProviders: RouteProviders = [
  ...currentUserDetailsApiRouteProviders,
  ...authStoreProviders,
  ...dashboardStateProviders,
];
