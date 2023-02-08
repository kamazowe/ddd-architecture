import { Injectable } from '@angular/core';
import {
  LoginRequestPayload,
  loginUrl,
} from '@ddd-architecture/shared/contracts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthDataService {
  private readonly urls = {
    login: `api/${loginUrl}`,
  };

  constructor(private httpClient: HttpClient) {}

  login(payload: LoginRequestPayload): Observable<void> {
    return this.httpClient.post<void>(this.urls.login, payload);
  }
}
