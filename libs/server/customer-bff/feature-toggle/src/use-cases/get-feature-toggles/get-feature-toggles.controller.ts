import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { getFeatureTogglesMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import {
  GetFeatureTogglesResponsePayload,
  getFeatureTogglestUrl,
} from '@ddd-architecture/shared/contracts';
import { ConfigType } from '@nestjs/config';

@Controller(getFeatureTogglestUrl)
export class GetFeatureTogglesController {
  private readonly logger: Logger = new Logger(
    GetFeatureTogglesController.name
  );

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Get()
  @BffMocks(getFeatureTogglesMockConfig)
  getData(): GetFeatureTogglesResponsePayload {
    return getFeatureTogglesMockConfig.mock().value;
  }
}
