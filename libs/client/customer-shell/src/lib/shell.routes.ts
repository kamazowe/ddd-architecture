import { Routes } from '@angular/router';
import { dashboardUseCaseRouteProviders } from '@ddd-architecture/client/use-cases/dashboard/customer/use-case';
import { partListUseCaseRouteProviders } from '@ddd-architecture/client/use-cases/part/list/customer/use-case';

export const shellRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
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
