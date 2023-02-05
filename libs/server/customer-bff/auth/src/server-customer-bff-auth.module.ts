import { Module } from '@nestjs/common';
import { LoginController } from './use-cases/login/login.controller';
import { RegisterController } from './use-cases/register/register.controller';
import { ForgotPasswordController } from './use-cases/forgot-password/forgot-password.controller';
import { ChangedPasswordController } from './use-cases/changed-password/changed-password.controller';

@Module({
  controllers: [
    LoginController,
    RegisterController,
    ForgotPasswordController,
    ChangedPasswordController,
  ],
})
export class ServerCustomerBffAuthModule {}
