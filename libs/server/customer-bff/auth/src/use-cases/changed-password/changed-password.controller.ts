import { Controller, Inject, Logger, Post } from '@nestjs/common';
import {
  changedPasswordUrl,
  forgotPasswordUrl,
} from '@ddd-architecture/shared/contracts';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { changedPasswordMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import { ConfigType } from '@nestjs/config';

@Controller(changedPasswordUrl)
export class ChangedPasswordController {
  private readonly logger: Logger = new Logger(ChangedPasswordController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Post()
  @BffMocks(changedPasswordMockConfig)
  handle(): void {
    return changedPasswordMockConfig.mock().value;
  }
}
