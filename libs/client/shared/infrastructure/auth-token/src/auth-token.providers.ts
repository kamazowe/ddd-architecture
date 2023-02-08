import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { AuthTokenInterceptor } from './auth-token.interceptor';
import { AuthTokenService } from './auth-token.service';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';

export const authTokenProviders: RouteProviders = [
  AuthTokenService,
  AuthGuard,
  NoAuthGuard,
  { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
];
