import { Module } from '@nestjs/common';
import { ServerLoggingModule } from '@ddd-architecture/server/customer-bff/infrastructure/logging';
import { ServerHttpLoggingModule } from '@ddd-architecture/server/customer-bff/infrastructure/http-logging';
import { ServerEnvModule } from '@ddd-architecture/server/customer-bff/infrastructure/env';

@Module({
  imports: [ServerEnvModule, ServerLoggingModule, ServerHttpLoggingModule],
})
export class CustomerBffCoreModule {}
