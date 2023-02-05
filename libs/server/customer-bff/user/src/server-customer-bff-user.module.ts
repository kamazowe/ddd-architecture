import { Module } from '@nestjs/common';
import { GetCurrentUserController } from './use-cases/get-current-user/get-current-user.controller';

@Module({
  controllers: [GetCurrentUserController],
})
export class ServerCustomerBffUserModule {}
