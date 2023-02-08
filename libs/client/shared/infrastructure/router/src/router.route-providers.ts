import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { EntryPointsNavigatorService } from './entry-points-navigator.service';

export const routerRouteProviders: RouteProviders = [
  EntryPointsNavigatorService,
];
