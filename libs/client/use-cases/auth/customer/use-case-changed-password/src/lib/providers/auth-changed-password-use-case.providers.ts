import { UseCaseProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import {
  AuthChangedPasswordFeatureProvider,
  AuthChangedPasswordFeatureService,
} from '@ddd-architecture/client/use-cases/auth/shared/feature-changed-password';

export const authChangedPasswordUseCaseProviders: UseCaseProviders = [
  {
    provide: AuthChangedPasswordFeatureProvider,
    useClass: AuthChangedPasswordFeatureService,
  },
];
