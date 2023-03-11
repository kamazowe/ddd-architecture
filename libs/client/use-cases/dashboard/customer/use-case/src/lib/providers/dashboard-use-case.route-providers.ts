import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { currentUserDetailsApiRouteProviders } from '@ddd-architecture/client/use-cases/current-user/details/shared/api';
import { authStoreProviders } from '@ddd-architecture/client/use-cases/auth/shared/data-access';
import { currentUserRepositoryProviders } from '@ddd-architecture/client/use-cases/current-user/shared/repository';

export const dashboardUseCaseRouteProviders: RouteProviders = [
  ...currentUserDetailsApiRouteProviders,
  ...authStoreProviders,
  ...currentUserRepositoryProviders,
];
