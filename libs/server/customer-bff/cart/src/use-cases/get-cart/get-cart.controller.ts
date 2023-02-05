import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import {
  getCartMockConfig,
  getRegisterMockConfig,
} from '@ddd-architecture/server/customer-bff/mocks/application';
import {
  GetCartResponsePayload,
  getCartUrl,
} from '@ddd-architecture/shared/contracts';
import { ConfigType } from '@nestjs/config';

@Controller(getCartUrl)
export class GetCartController {
  private readonly logger: Logger = new Logger(GetCartController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Get()
  @BffMocks(getCartMockConfig)
  getData(): GetCartResponsePayload {
    return getCartMockConfig.mock().value;
  }
}
