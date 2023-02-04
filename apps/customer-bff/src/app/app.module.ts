import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerBffCoreModule } from '@ddd-architecture/server/customer-bff/core';
import { ServerMocksModule } from '@ddd-architecture/server/customer-bff/mocks/infrastructure';

@Module({
  imports: [CustomerBffCoreModule, ServerMocksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
