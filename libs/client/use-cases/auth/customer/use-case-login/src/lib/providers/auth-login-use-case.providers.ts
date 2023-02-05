import { UseCaseProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { AuthForgotPasswordFeatureService } from '@ddd-architecture/client/use-cases/auth/shared/feature-forgot-password';
import { AuthLoginFeatureProvider } from '@ddd-architecture/client/use-cases/auth/shared/feature-login';

export const authLoginUseCaseProviders: UseCaseProviders = [
  {
    provide: AuthLoginFeatureProvider,
    useClass: AuthForgotPasswordFeatureService,
  },
];
