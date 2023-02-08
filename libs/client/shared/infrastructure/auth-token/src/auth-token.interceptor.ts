import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';
import { isDefined } from '@ddd-architecture/shared/utils';
import { tokenHeaderKey } from '@ddd-architecture/shared/contracts';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authTokenService: AuthTokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authTokenService.getToken();

    if (isDefined(token)) {
      const cloned = request.clone({
        headers: request.headers.set(tokenHeaderKey, 'Bearer ' + token),
      });
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}
