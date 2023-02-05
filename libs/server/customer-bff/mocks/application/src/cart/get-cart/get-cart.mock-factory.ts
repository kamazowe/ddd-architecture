import { HttpStatus } from '@ddd-architecture/shared/utils';
import { GetCartResponsePayload } from '@ddd-architecture/shared/contracts';
import {
  BffMock,
  BffMockConfig,
  mockResponseDelay,
} from '@ddd-architecture/server/customer-bff/mocks/domain';

class GetCartMockFactory {
  static default(request?: Request): BffMock<GetCartResponsePayload> {
    return {
      value: {
        items: [
          {
            id: '234',
            name: '[mock] part 2',
            image: {
              src: 'assets/images/hello.png',
              alt: '[mock] alt',
            },
            price: {
              value: 123.59,
              unit: '',
            },
            available: {
              isInStock: false,
            },
            sellable: false,
            properties: [
              {
                name: {
                  label: 'Weight',
                  code: 'ASD',
                },
                value: {
                  label: '12',
                  code: 'Z|C',
                },
                unit: {
                  label: 'kilograms',
                  code: 'AZX',
                },
              },
            ],
          },
        ],
      },
      status: HttpStatus.OK,
    };
  }
}

export const getCartMockConfig: BffMockConfig<GetCartResponsePayload> = {
  delay: mockResponseDelay,
  mock: () => GetCartMockFactory.default(),
};
