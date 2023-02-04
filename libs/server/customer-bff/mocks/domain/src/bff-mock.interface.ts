import { HttpStatus } from '@ddd-architecture/shared/utils';

export interface BffMock<T> {
  value: T | null;
  status: HttpStatus;
}

export interface BffMockConfig<T> {
  mock: (request?: Request) => BffMock<T>;
  delay?: number;
}
