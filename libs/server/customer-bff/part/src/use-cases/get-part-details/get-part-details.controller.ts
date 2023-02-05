import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { getPartDetailsMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import {
  GetPartDetailsResponsePayload,
  getPartDetailsUrl,
} from '@ddd-architecture/shared/contracts';
import { ConfigType } from '@nestjs/config';

@Controller(getPartDetailsUrl)
export class GetPartDetailsController {
  private readonly logger: Logger = new Logger(GetPartDetailsController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Get()
  @BffMocks(getPartDetailsMockConfig)
  getData(): GetPartDetailsResponsePayload {
    return getPartDetailsMockConfig.mock().value;
  }
}
