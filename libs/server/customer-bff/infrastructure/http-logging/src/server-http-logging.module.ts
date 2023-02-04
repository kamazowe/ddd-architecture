import { MiddlewareConsumer, Module } from '@nestjs/common';
import { RequestResponseLoggingMiddleware } from './request-response-logging.middleware';

@Module({})
export class ServerHttpLoggingModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestResponseLoggingMiddleware).forRoutes('*');
  }
}
