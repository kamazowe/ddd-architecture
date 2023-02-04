import { HttpStatus } from '@ddd-architecture/shared/utils';
import { GetAppResponsePayload } from '@ddd-architecture/shared/contracts';
import {
  BffMock,
  BffMockConfig,
} from '@ddd-architecture/server/customer-bff/mocks/domain';

class MockFactory {
  static default(request?: Request): BffMock<GetAppResponsePayload> {
    return {
      value: {
        id: '[mock] 123',
        name: 'test app',
      },
      status: HttpStatus.OK,
    };
  }

  static notFound(request?: Request): BffMock<GetAppResponsePayload> {
    return {
      value: null,
      status: HttpStatus.NOT_FOUND,
    };
  }
}

export const appMockConfig: BffMockConfig<GetAppResponsePayload> = {
  delay: 1000,
  mock: () => MockFactory.default(),
};
