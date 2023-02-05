import {
  BffMock,
  BffMockConfig,
  mockResponseDelay,
} from '@ddd-architecture/server/customer-bff/mocks/domain';
import { HttpStatus } from '@ddd-architecture/shared/utils';
import { GetCartItemCountResponsePayload } from '@ddd-architecture/shared/contracts';

class GetCartItemCountMockFactory {
  static default(request?: Request): BffMock<GetCartItemCountResponsePayload> {
    return {
      value: { count: 3 },
      status: HttpStatus.OK,
    };
  }
}

export const getCartItemCountMockConfig: BffMockConfig<GetCartItemCountResponsePayload> =
  {
    delay: mockResponseDelay,
    mock: () => GetCartItemCountMockFactory.default(),
  };
