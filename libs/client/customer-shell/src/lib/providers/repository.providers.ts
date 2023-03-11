import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { featureToggleRepositoryProviders } from '@ddd-architecture/client/shared/infrastructure/feature-toggle/repository';
import { currentUserRepositoryProviders } from '@ddd-architecture/client/use-cases/current-user/shared/repository';

export const repositoryProviders: RouteProviders = [
  ...featureToggleRepositoryProviders,
  ...currentUserRepositoryProviders,
];
