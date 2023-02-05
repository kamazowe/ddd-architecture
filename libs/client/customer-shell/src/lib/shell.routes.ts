import { Routes } from '@angular/router';
import { dashboardUseCaseRouteProviders } from '@ddd-architecture/client/use-cases/dashboard/customer/use-case';
import { partListUseCaseRouteProviders } from '@ddd-architecture/client/use-cases/part/list/customer/use-case';
import { authLoginUseCaseRouteProviders } from '@ddd-architecture/client/use-cases/auth/customer/use-case-login';
import { authRegistrationUseCaseRouteProviders } from '@ddd-architecture/client/use-cases/auth/customer/use-case-registration';
import { authForgotPasswordUseCaseRouteProviders } from '@ddd-architecture/client/use-cases/auth/customer/use-case-forgot-password';
import { authChangedPasswordUseCaseRouteProviders } from '@ddd-architecture/client/use-cases/auth/customer/use-case-changed-password';

export const shellRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        pathMatch: 'full',
        providers: authLoginUseCaseRouteProviders,
        loadComponent: () =>
          import(
            '@ddd-architecture/client/use-cases/auth/customer/use-case-login'
          ).then((m) => m.AuthCustomerUseCaseLoginComponent),
      },
      {
        path: 'registration',
        pathMatch: 'full',
        providers: authRegistrationUseCaseRouteProviders,
        loadComponent: () =>
          import(
            '@ddd-architecture/client/use-cases/auth/customer/use-case-registration'
          ).then((m) => m.AuthCustomerUseCaseRegistrationComponent),
      },
      {
        path: 'changed-password',
        pathMatch: 'full',
        providers: authChangedPasswordUseCaseRouteProviders,
        loadComponent: () =>
          import(
            '@ddd-architecture/client/use-cases/auth/customer/use-case-changed-password'
          ).then((m) => m.AuthCustomerUseCaseChangedPasswordComponent),
      },
      {
        path: 'forgot-password',
        pathMatch: 'full',
        providers: authForgotPasswordUseCaseRouteProviders,
        loadComponent: () =>
          import(
            '@ddd-architecture/client/use-cases/auth/customer/use-case-forgot-password'
          ).then((m) => m.AuthCustomerUseCaseForgotPasswordComponent),
      },
    ],
  },
  {
    path: 'dashboard',
    providers: dashboardUseCaseRouteProviders,
    loadComponent: () =>
      import(
        '@ddd-architecture/client/use-cases/dashboard/customer/use-case'
      ).then((m) => m.ClientUseCasesDashboardCustomerUseCaseComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'parts',
      },
      {
        path: 'parts',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'list',
          },
          {
            path: 'list',
            pathMatch: 'full',
            providers: partListUseCaseRouteProviders,
            loadComponent: () =>
              import(
                '@ddd-architecture/client/use-cases/part/list/customer/use-case'
              ).then((m) => m.ClientUseCasesPartListCustomerUseCaseComponent),
          },
        ],
      },
    ],
  },
];
