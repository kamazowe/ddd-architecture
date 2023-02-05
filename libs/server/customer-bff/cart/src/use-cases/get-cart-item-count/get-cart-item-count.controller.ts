import { Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { getCartItemCountMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import { ConfigType } from '@nestjs/config';
import {
  GetCartItemCountResponsePayload,
  getCartItemCountUrl,
} from '@ddd-architecture/shared/contracts';

@Controller(getCartItemCountUrl)
export class GetCartItemCountController {
  private readonly logger: Logger = new Logger(GetCartItemCountController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Get()
  @BffMocks(getCartItemCountMockConfig)
  getData(): GetCartItemCountResponsePayload {
    return getCartItemCountMockConfig.mock().value;
  }
}
