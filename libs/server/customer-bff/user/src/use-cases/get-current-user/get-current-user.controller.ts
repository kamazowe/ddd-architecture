import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { getCurrentUserMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import {
  GetCurrentUserResponsePayload,
  getCurrentUserUrl,
} from '@ddd-architecture/shared/contracts';
import { ConfigType } from '@nestjs/config';

@Controller(getCurrentUserUrl)
export class GetCurrentUserController {
  private readonly logger: Logger = new Logger(GetCurrentUserController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Get()
  @BffMocks(getCurrentUserMockConfig)
  getData(): GetCurrentUserResponsePayload {
    return getCurrentUserMockConfig.mock().value;
  }
}
