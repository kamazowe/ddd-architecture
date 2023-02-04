import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { delay, Observable, of } from 'rxjs';
import { MocksEnabledConfigService } from './mocks-enabled-config.service';
import { Reflector } from '@nestjs/core';
import { isDefined } from '@ddd-architecture/shared/utils';
import {
  BFF_MOCK_METADATA_KEY,
  BffMockConfig,
} from '@ddd-architecture/server/customer-bff/mocks/domain';

@Injectable()
export class MocksInterceptor implements NestInterceptor {
  logger = new Logger(MocksInterceptor.name);

  constructor(private mocksEnabledConfigService: MocksEnabledConfigService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();

    if (this.shouldUseMocks(request)) {
      const response = context.switchToHttp().getResponse();
      const reflector = new Reflector();
      const mockConfig = reflector.get<BffMockConfig<unknown> | undefined>(
        BFF_MOCK_METADATA_KEY,
        context.getHandler()
      );
      if (!isDefined(mockConfig)) {
        throw new Error('Api mock does not exist');
      }
      return this.getMock(mockConfig, request, response);
    }
    return next.handle();
  }

  private shouldUseMocks(request: Request): boolean {
    return (
      this.mocksEnabledConfigService.allMocksEnabled() ||
      this.mocksEnabledConfigService.mockEnabled(request)
    );
  }

  private getMock<T>(
    mockConfig: BffMockConfig<T>,
    request: Request,
    response
  ): Observable<unknown> {
    const mock = mockConfig.mock();
    response.statusCode = mock.status;
    return of(mock.value).pipe(delay(mockConfig.delay));
  }
}
