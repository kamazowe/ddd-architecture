import { of } from 'rxjs';
import { CurrentUserDetailsApiProvider } from './current-user-details-api.provider';
import {
  PermissionsAction,
  PermissionScope,
  Permissions,
  GetCurrentUserResponsePayload,
} from '@ddd-architecture/shared/contracts';

const permissionsMock: Permissions = {
  [PermissionScope.parts]: {
    [PermissionsAction.read]: true,
    [PermissionsAction.create]: true,
    [PermissionsAction.update]: true,
    [PermissionsAction.delete]: true,
  },
  [PermissionScope.machines]: {
    [PermissionsAction.read]: true,
    [PermissionsAction.create]: true,
    [PermissionsAction.update]: true,
    [PermissionsAction.delete]: true,
  },
};

const userMock: GetCurrentUserResponsePayload = {
  id: '[mock] id',
  firstName: 'test name',
  lastName: 'test name 2',
  email: 'test@test.com',
  address: null,
  avatar: {
    src: 'assets/images/hello.png',
    alt: 'current user avatar',
  },
  permissions: permissionsMock,
};

export class CurrentUserDetailsApiService
  implements CurrentUserDetailsApiProvider
{
  isLoggedIn$ = of(true);

  permissions$ = of(permissionsMock);
  currentUser$ = of(userMock);

  permissionsForScope$ = (scope: PermissionScope) => of(permissionsMock[scope]);
}
