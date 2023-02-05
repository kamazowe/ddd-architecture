import { Module } from '@nestjs/common';
import { LoginController } from './use-cases/login/login.controller';
import { RegisterController } from './use-cases/register/register.controller';

@Module({
  controllers: [LoginController, RegisterController],
})
export class ServerCustomerBffAuthModule {}
