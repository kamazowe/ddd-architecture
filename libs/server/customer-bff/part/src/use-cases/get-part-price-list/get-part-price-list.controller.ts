import { Controller, Inject, Logger, Post } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { getPartPriceListMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import {
  GetPartPriceListResponsePayload,
  getPartPriceListUrl,
} from '@ddd-architecture/shared/contracts';
import { ConfigType } from '@nestjs/config';

@Controller(getPartPriceListUrl)
export class GetPartPriceListController {
  private readonly logger: Logger = new Logger(GetPartPriceListController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Post()
  @BffMocks(getPartPriceListMockConfig)
  getData(): GetPartPriceListResponsePayload {
    return getPartPriceListMockConfig.mock().value;
  }
}
