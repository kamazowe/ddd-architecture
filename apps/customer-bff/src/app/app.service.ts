import { Injectable } from '@nestjs/common';
import { GetAppResponsePayload } from '@ddd-architecture/shared/contracts';

@Injectable()
export class AppService {
  getData(): GetAppResponsePayload {
    return {
      id: '[real] 123',
      name: 'real name',
    };
  }
}
