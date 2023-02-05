import {
  BffMock,
  BffMockConfig,
  mockResponseDelay,
} from '@ddd-architecture/server/customer-bff/mocks/domain';
import { HttpStatus } from '@ddd-architecture/shared/utils';

class AddItemListToCartMockFactory {
  static default(request?: Request): BffMock<void> {
    return {
      value: null,
      status: HttpStatus.OK,
    };
  }
}

export const addItemListToCartMockConfig: BffMockConfig<void> = {
  delay: mockResponseDelay,
  mock: () => AddItemListToCartMockFactory.default(),
};
