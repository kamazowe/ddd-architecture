import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import {
  GetPartListResponsePayload,
  getPartListUrl,
} from '@ddd-architecture/shared/contracts';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { ConfigType } from '@nestjs/config';
import { getPartListMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';

@Controller(getPartListUrl)
export class GetPartListController {
  private readonly logger: Logger = new Logger(GetPartListController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Get()
  @BffMocks(getPartListMockConfig)
  getData(): GetPartListResponsePayload {
    return getPartListMockConfig.mock().value;
  }
}
