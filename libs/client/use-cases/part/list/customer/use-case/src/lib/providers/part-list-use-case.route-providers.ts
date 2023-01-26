import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { storeProviders } from '@ddd-architecture/client/use-cases/part/list/shared/data-access';

export const partListUseCaseRouteProviders: RouteProviders = [
  ...storeProviders,
];
