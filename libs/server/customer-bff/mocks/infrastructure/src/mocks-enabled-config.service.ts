import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { ConfigType } from '@nestjs/config';
import { bffMockHeaderKey } from '@ddd-architecture/server/customer-bff/mocks/domain';

@Injectable()
export class MocksEnabledConfigService {
  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  // todo refactor
  allMocksEnabled(): boolean {
    return this.configService.bffApiMocks === 1;
  }

  mockEnabled(request: Request): boolean {
    return request.headers[bffMockHeaderKey] === '1';
  }
}
