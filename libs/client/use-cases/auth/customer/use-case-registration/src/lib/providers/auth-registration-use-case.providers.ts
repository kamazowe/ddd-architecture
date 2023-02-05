import { UseCaseProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import {
  AuthRegistrationFeatureProvider,
  AuthRegistrationFeatureService,
} from '@ddd-architecture/client/use-cases/auth/shared/feature-registration';

export const authRegistrationUseCaseProviders: UseCaseProviders = [
  {
    provide: AuthRegistrationFeatureProvider,
    useClass: AuthRegistrationFeatureService,
  },
];
