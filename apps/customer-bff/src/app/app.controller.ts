import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigType } from '@nestjs/config';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/core';
import {
  appUrl,
  GetAppResponsePayload,
} from '@ddd-architecture/shared/contracts';
import { Observable, of } from 'rxjs';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { appMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(AppController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>,
    private readonly appService: AppService
  ) {}

  @Get(appUrl)
  @BffMocks(appMockConfig)
  getData(): GetAppResponsePayload {
    return this.appService.getData();
  }
}
