import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerBffCoreModule } from '@ddd-architecture/server/customer-bff/core';

@Module({
  imports: [CustomerBffCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
