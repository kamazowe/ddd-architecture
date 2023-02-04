import { Inject, Injectable, Logger } from '@nestjs/common';

import { NestMiddleware } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { ConfigType } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
@Injectable()
export class RequestResponseLoggingMiddleware implements NestMiddleware {
  logger = new Logger(RequestResponseLoggingMiddleware.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // TODO create payload content logging
    const basicLog = `${req.method} : ${req.baseUrl}`;

    if (this.configService.requestResponseLogging) {
      this.logger.log(`${basicLog}`, 'INCOMING REQUEST');
    }

    if (this.configService.requestResponseLogging) {
      res.on('finish', () => {
        this.logger.log(`${basicLog}`, 'OUTCOMING RESPONSE');
      });
    }
    next();
  }
}
