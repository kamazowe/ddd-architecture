import { Injectable } from '@angular/core';
import {
  LoginRequestPayload,
  LoginResponsePayload,
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

  login(payload: LoginRequestPayload): Observable<LoginResponsePayload> {
    return this.httpClient.post<LoginResponsePayload>(this.urls.login, payload);
  }
}
