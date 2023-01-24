import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { CurrentUserDetailsApiProvider } from './current-user-details-api.provider';
import { CurrentUserDetailsApiService } from './current-user-details-api.service';

export const currentUserDetailsApiRouteProviders: RouteProviders = [
  {
    provide: CurrentUserDetailsApiProvider,
    useClass: CurrentUserDetailsApiService,
  },
];
