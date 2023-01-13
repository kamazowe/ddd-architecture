import { Routes } from '@angular/router';

export const shellRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
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
