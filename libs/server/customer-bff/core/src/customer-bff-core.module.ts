import { Global, Module } from '@nestjs/common';
import { ServerLoggingModule } from '@ddd-architecture/server/customer-bff/infrastructure/logging';

@Global()
@Module({
  imports: [ServerLoggingModule],
  exports: [ServerLoggingModule],
})
export class CustomerBffCoreModule {}
