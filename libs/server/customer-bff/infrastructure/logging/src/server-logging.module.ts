import { ConsoleLogger, Module } from '@nestjs/common';
import { BasicLoggerService } from './basic-logger.service';

@Module({
  providers: [
    {
      provide: ConsoleLogger,
      useClass: BasicLoggerService,
    },
  ],
})
export class ServerLoggingModule {}
