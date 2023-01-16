import { storeProviders } from '@ddd-architecture/client/use-cases/part/list/shared/data-access';
import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';

export const partListUseCaseProviders: RouteProviders = [...storeProviders];
