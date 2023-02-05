import { HttpStatus } from '@ddd-architecture/shared/utils';
import {
  BffMock,
  BffMockConfig,
  mockResponseDelay,
} from '@ddd-architecture/server/customer-bff/mocks/domain';
import { GetPartPriceListResponsePayload } from '@ddd-architecture/shared/contracts';

class GetPartPriceListMockFactory {
  static default(request?: Request): BffMock<GetPartPriceListResponsePayload> {
    return {
      value: [
        {
          partId: '[mock] 1232',
          price: {
            pricePerUnit: 12.12,
            unit: {
              label: '$',
              code: 'asd',
            },
            total: 12.12,
            quantity: 1,
          },
        },
        {
          partId: '[mock] 1233',
          price: {
            pricePerUnit: 5.12,
            unit: {
              label: '$',
              code: 'asd',
            },
            total: 10.24,
            quantity: 2,
          },
        },
      ],
      status: HttpStatus.OK,
    };
  }
}

export const getPartPriceListMockConfig: BffMockConfig<GetPartPriceListResponsePayload> =
  {
    delay: mockResponseDelay,
    mock: () => GetPartPriceListMockFactory.default(),
  };
