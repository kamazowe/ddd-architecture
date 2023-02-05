import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerBffCoreModule } from '@ddd-architecture/server/customer-bff/core';
import { ServerMocksModule } from '@ddd-architecture/server/customer-bff/mocks/infrastructure';
import { ServerCustomerBffPartModule } from '@ddd-architecture/server/customer-bff/part';
import { ServerCustomerBffCartModule } from '@ddd-architecture/server/customer-bff/cart';
import { ServerCustomerBffAuthModule } from '@ddd-architecture/server/customer-bff/auth';
import { ServerCustomerBffUserModule } from '@ddd-architecture/server/customer-bff/user';

@Module({
  imports: [
    CustomerBffCoreModule,
    ServerMocksModule,
    ServerCustomerBffAuthModule,
    ServerCustomerBffUserModule,
    ServerCustomerBffPartModule,
    ServerCustomerBffCartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
