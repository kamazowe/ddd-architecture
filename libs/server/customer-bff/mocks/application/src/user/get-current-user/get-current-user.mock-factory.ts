import { HttpStatus } from '@ddd-architecture/shared/utils';
import {
  BffMock,
  BffMockConfig,
  mockResponseDelay,
} from '@ddd-architecture/server/customer-bff/mocks/domain';
import {
  GetCurrentUserResponsePayload,
  Permissions,
  PermissionsAction,
  PermissionScope,
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

class GetCurrentUserMockFactory {
  static default(request?: Request): BffMock<GetCurrentUserResponsePayload> {
    return {
      value: {
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
      },
      status: HttpStatus.OK,
    };
  }
}

export const getCurrentUserMockConfig: BffMockConfig<GetCurrentUserResponsePayload> =
  {
    delay: mockResponseDelay,
    mock: () => GetCurrentUserMockFactory.default(),
  };
