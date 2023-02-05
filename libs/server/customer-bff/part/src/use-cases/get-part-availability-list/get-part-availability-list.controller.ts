import { Controller, Inject, Logger, Post } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { getPartAvailabilityListMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import { ConfigType } from '@nestjs/config';
import {
  GetPartAvailabilityListResponsePayload,
  getPartAvailabilityListUrl,
} from '@ddd-architecture/shared/contracts';

@Controller(getPartAvailabilityListUrl)
export class GetPartAvailabilityListController {
  private readonly logger: Logger = new Logger(
    GetPartAvailabilityListController.name
  );

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Post()
  @BffMocks(getPartAvailabilityListMockConfig)
  getData(): GetPartAvailabilityListResponsePayload {
    return getPartAvailabilityListMockConfig.mock().value;
  }
}
