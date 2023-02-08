import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { authStoreProviders } from '@ddd-architecture/client/use-cases/auth/shared/data-access';

export const authLoginUseCaseRouteProviders: RouteProviders = [
  ...authStoreProviders,
];
