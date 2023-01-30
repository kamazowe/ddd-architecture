import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { ConfigType } from '@nestjs/config';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';

@Injectable()
export class RequestLoggingInterceptor implements NestInterceptor {
  logger = new Logger(RequestLoggingInterceptor.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // TODO create payload content logging
    const basicLog = `${context.switchToHttp().getRequest().method} : ${
      context.switchToHttp().getRequest().url
    }`;

    if (this.configService.requestResponseLogging) {
      this.logger.log(`${basicLog}`, 'INCOMING REQUEST');
    }
    return next.handle().pipe(
      tap((response) => {
        if (this.configService.requestResponseLogging) {
          this.logger.log(`${basicLog}`, 'OUTCOMING RESPONSE');
        }
      })
    );
  }
}
