import { HttpStatus } from '@ddd-architecture/shared/utils';
import {
  BffMock,
  BffMockConfig,
  mockResponseDelay,
} from '@ddd-architecture/server/customer-bff/mocks/domain';
import { GetPartAvailabilityListResponsePayload } from '@ddd-architecture/shared/contracts';

class GetPartAvailabilityListMockFactory {
  static default(
    request?: Request
  ): BffMock<GetPartAvailabilityListResponsePayload> {
    return {
      value: [
        {
          partId: '[mock] 1232',
          quantity: 1,
        },
        {
          partId: '[mock] 1232',
          quantity: 2,
        },
      ],
      status: HttpStatus.OK,
    };
  }
}

export const getPartAvailabilityListMockConfig: BffMockConfig<GetPartAvailabilityListResponsePayload> =
  {
    delay: mockResponseDelay,
    mock: () => GetPartAvailabilityListMockFactory.default(),
  };
