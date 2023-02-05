import { HttpStatus } from '@ddd-architecture/shared/utils';
import {
  BffMock,
  BffMockConfig,
} from '@ddd-architecture/server/customer-bff/mocks/domain';

class ChangedPasswordMockFactory {
  static default(request?: Request): BffMock<void> {
    return {
      value: null,
      status: HttpStatus.OK,
    };
  }
}

export const changedPasswordMockConfig: BffMockConfig<void> = {
  delay: 1000,
  mock: () => ChangedPasswordMockFactory.default(),
};
