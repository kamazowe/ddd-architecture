import { HttpStatus } from '@ddd-architecture/shared/utils';
import {
  BffMock,
  BffMockConfig,
} from '@ddd-architecture/server/customer-bff/mocks/domain';
import { LoginResponsePayload } from '@ddd-architecture/shared/contracts';

class LoginMockFactory {
  static default(request?: Request): BffMock<LoginResponsePayload> {
    return {
      value: {
        token: '1232',
      },
      status: HttpStatus.OK,
    };
  }
}

export const getLoginMockConfig: BffMockConfig<LoginResponsePayload> = {
  delay: 1000,
  mock: () => LoginMockFactory.default(),
};
