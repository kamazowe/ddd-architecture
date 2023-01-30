/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ConsoleLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const logger = app.get(ConsoleLogger);
  app.useLogger(logger);
  const env = app.get(CONFIG_ENV.KEY);
  const port = env.port;
  const host = env.host;
  await app.listen(port);
  logger.log(
    `🚀 Application is running on: http://${host}:${port}/${globalPrefix}`,
    'Bootstrap'
  );
}

bootstrap();
