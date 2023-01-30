import { ConsoleLogger } from '@nestjs/common';

export class BasicLoggerService extends ConsoleLogger {
  log(message: any, context?: string): void {
    super.log(`${message}`, context);
  }
}
