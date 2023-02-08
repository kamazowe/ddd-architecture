import { UseCaseProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import {
  AuthLoginFeatureProvider,
  AuthLoginFeatureService,
} from '@ddd-architecture/client/use-cases/auth/shared/feature-login';

export const authLoginUseCaseProviders: UseCaseProviders = [
  {
    provide: AuthLoginFeatureProvider,
    useClass: AuthLoginFeatureService,
  },
];
