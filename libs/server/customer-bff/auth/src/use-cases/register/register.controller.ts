import { Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { getRegisterMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import { registerUrl } from '@ddd-architecture/shared/contracts';
import { ConfigType } from '@nestjs/config';

@Controller(registerUrl)
export class RegisterController {
  private readonly logger: Logger = new Logger(RegisterController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Post()
  @BffMocks(getRegisterMockConfig)
  getData(): void {
    return getRegisterMockConfig.mock().value;
  }
}
