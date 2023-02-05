import { HttpStatus } from '@ddd-architecture/shared/utils';
import {
  BffMock,
  BffMockConfig,
} from '@ddd-architecture/server/customer-bff/mocks/domain';

class RegisterMockFactory {
  static default(request?: Request): BffMock<void> {
    return {
      value: null,
      status: HttpStatus.CREATED,
    };
  }
}

export const getRegisterMockConfig: BffMockConfig<void> = {
  delay: 1000,
  mock: () => RegisterMockFactory.default(),
};
