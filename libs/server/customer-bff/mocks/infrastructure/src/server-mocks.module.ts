import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MocksInterceptor } from './mocks.interceptor';
import { MocksEnabledConfigService } from './mocks-enabled-config.service';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: MocksInterceptor,
    },
    MocksEnabledConfigService,
  ],
})
export class ServerMocksModule {}
