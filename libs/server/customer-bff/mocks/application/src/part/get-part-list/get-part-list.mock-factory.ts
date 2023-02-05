import { HttpStatus } from '@ddd-architecture/shared/utils';
import {
  BffMock,
  BffMockConfig,
  mockResponseDelay,
} from '@ddd-architecture/server/customer-bff/mocks/domain';
import { GetPartListResponsePayload } from '@ddd-architecture/shared/contracts';

class GetPartListMockFactory {
  static default(request?: Request): BffMock<GetPartListResponsePayload> {
    return {
      value: [
        {
          id: '123',
          name: '[mock] part 1',
          image: {
            src: 'assets/images/hello.png',
            alt: '[mock] alt',
          },
          price: {
            value: 123.59,
            unit: '$',
          },
          available: {
            isInStock: true,
          },
          sellable: true,
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
            {
              name: {
                label: 'Length',
                code: 'ASD',
              },
              value: {
                label: '2',
                code: 'Z|C',
              },
              unit: {
                label: 'meters',
                code: 'AZX',
              },
            },
            {
              name: {
                label: 'Color',
                code: 'ASD',
              },
              value: {
                label: 'blue',
                code: 'Z|C',
              },
              unit: {
                label: '',
                code: 'AZX',
              },
            },
            {
              name: {
                label: 'Color secondary',
                code: 'ASD@',
              },
              value: {
                label: 'red',
                code: 'Z|C2',
              },
              unit: {
                label: '',
                code: 'AZX',
              },
            },
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
            {
              name: {
                label: 'Length',
                code: 'ASD',
              },
              value: {
                label: '2',
                code: 'Z|C',
              },
              unit: {
                label: 'meters',
                code: 'AZX',
              },
            },
            {
              name: {
                label: 'Color',
                code: 'ASD',
              },
              value: {
                label: 'blue',
                code: 'Z|C',
              },
              unit: {
                label: '',
                code: 'AZX',
              },
            },
            {
              name: {
                label: 'Color secondary',
                code: 'ASD@',
              },
              value: {
                label: 'red',
                code: 'Z|C2',
              },
              unit: {
                label: '',
                code: 'AZX',
              },
            },
          ],
        },
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
        {
          id: '345',
          name: '[mock] part 3',
          image: null,
          price: null,
          available: null,
          sellable: false,
          properties: [],
        },
      ],
      status: HttpStatus.OK,
    };
  }
}

export const getPartListMockConfig: BffMockConfig<GetPartListResponsePayload> =
  {
    delay: mockResponseDelay,
    mock: () => GetPartListMockFactory.default(),
  };
