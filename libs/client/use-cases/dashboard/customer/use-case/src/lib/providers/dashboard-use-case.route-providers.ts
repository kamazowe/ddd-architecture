import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { currentUserDetailsApiRouteProviders } from '@ddd-architecture/client/use-cases/current-user/details/shared/api';

export const dashboardUseCaseRouteProviders: RouteProviders = [
  ...currentUserDetailsApiRouteProviders,
];
