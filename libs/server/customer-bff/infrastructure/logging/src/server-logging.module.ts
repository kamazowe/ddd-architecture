import { ConsoleLogger, Module } from '@nestjs/common';
import { BasicLoggerService } from './basic-logger.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RequestLoggingInterceptor } from './request-logging.interceptor';
import { ServerEnvModule } from '@ddd-architecture/server/customer-bff/infrastructure/env';

@Module({
  imports: [ServerEnvModule],
  providers: [
    {
      provide: ConsoleLogger,
      useClass: BasicLoggerService,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestLoggingInterceptor,
    },
  ],
  exports: [ConsoleLogger],
})
export class ServerLoggingModule {}
