import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_ENV } from './env.config';
import { validate } from './env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [CONFIG_ENV],
      validate,
    }),
  ],
})
export class ServerEnvModule {}
