import {
  BffMock,
  BffMockConfig,
  mockResponseDelay,
} from '@ddd-architecture/server/customer-bff/mocks/domain';
import { HttpStatus } from '@ddd-architecture/shared/utils';

class RemoveItemListToCartMockFactory {
  static default(request?: Request): BffMock<void> {
    return {
      value: null,
      status: HttpStatus.OK,
    };
  }
}

export const removeItemListToCartMockConfig: BffMockConfig<void> = {
  delay: mockResponseDelay,
  mock: () => RemoveItemListToCartMockFactory.default(),
};
