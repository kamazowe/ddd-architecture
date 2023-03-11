import { HttpStatus } from '@ddd-architecture/shared/utils';
import {
  BffMock,
  BffMockConfig,
  mockResponseDelay,
} from '@ddd-architecture/server/customer-bff/mocks/domain';
import {
  FeatureToggle,
  GetFeatureTogglesResponsePayload,
} from '@ddd-architecture/shared/contracts';

class GetFeatureTogglesMockFactory {
  static default(request?: Request): BffMock<GetFeatureTogglesResponsePayload> {
    return {
      value: {
        [FeatureToggle.machine]: true,
        [FeatureToggle.part]: true,
      },
      status: HttpStatus.OK,
    };
  }
}

export const getFeatureTogglesMockConfig: BffMockConfig<GetFeatureTogglesResponsePayload> =
  {
    delay: mockResponseDelay,
    mock: () => GetFeatureTogglesMockFactory.default(),
  };
