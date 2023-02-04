import { SetMetadata } from '@nestjs/common';
import { BffMockConfig } from './bff-mock.interface';

export const BFF_MOCK_METADATA_KEY = 'api-mock';
export const BffMocks = <T>(config: BffMockConfig<T>) =>
  SetMetadata(BFF_MOCK_METADATA_KEY, config);
