import { Controller, Inject, Logger, Post } from '@nestjs/common';
import { forgotPasswordUrl } from '@ddd-architecture/shared/contracts';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { forgotPasswordMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import { ConfigType } from '@nestjs/config';

@Controller(forgotPasswordUrl)
export class ForgotPasswordController {
  private readonly logger: Logger = new Logger(ForgotPasswordController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Post()
  @BffMocks(forgotPasswordMockConfig)
  handle(): void {
    return forgotPasswordMockConfig.mock().value;
  }
}
