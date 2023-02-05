import { UseCaseProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import {
  AuthForgotPasswordFeatureProvider,
  AuthForgotPasswordFeatureService,
} from '@ddd-architecture/client/use-cases/auth/shared/feature-forgot-password';

export const authForgotPasswordUseCaseProviders: UseCaseProviders = [
  {
    provide: AuthForgotPasswordFeatureProvider,
    useClass: AuthForgotPasswordFeatureService,
  },
];
