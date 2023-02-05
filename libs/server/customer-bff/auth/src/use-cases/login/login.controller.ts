import { Controller, Inject, Logger, Post } from '@nestjs/common';
import {
  LoginResponsePayload,
  loginUrl,
} from '@ddd-architecture/shared/contracts';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { getLoginMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import { ConfigType } from '@nestjs/config';

@Controller(loginUrl)
export class LoginController {
  private readonly logger: Logger = new Logger(LoginController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Post()
  @BffMocks(getLoginMockConfig)
  handle(): LoginResponsePayload {
    return getLoginMockConfig.mock().value;
  }
}
