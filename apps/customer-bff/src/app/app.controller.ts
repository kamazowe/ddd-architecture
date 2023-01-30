import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigType } from '@nestjs/config';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/core';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(AppController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>,
    private readonly appService: AppService
  ) {}

  @Get('test-bff')
  getData() {
    this.logger.log('test log');
    return this.appService.getData();
  }
}
