import { Routes } from '@angular/router';
import { partListUseCaseProviders } from '@ddd-architecture/client/use-cases/part/list/customer/use-case';
import { dashboardUseCaseProviders } from '@ddd-architecture/client/use-cases/dashboard/customer/use-case';
import { storeNotificationProviders } from '@ddd-architecture/client/shared/infrastructure/notification/data-access';
import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';

// TODO create a variable for all env providers
export const rootProviders: RouteProviders = [];

export const shellRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    // TODO move notification providers
    providers: [...dashboardUseCaseProviders, ...storeNotificationProviders],
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
            providers: partListUseCaseProviders,
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
