import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { partListStoreProviders } from '@ddd-architecture/client/use-cases/part/list/shared/data-access';

export const partListUseCaseRouteProviders: RouteProviders = [
  ...partListStoreProviders,
];
