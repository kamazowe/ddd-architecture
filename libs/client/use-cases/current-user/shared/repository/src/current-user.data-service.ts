import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GetCurrentUserResponsePayload,
  getCurrentUserUrl,
} from '@ddd-architecture/shared/contracts';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CurrentUserDataService {
  private readonly urls = {
    getCurrentUser: `api/${getCurrentUserUrl}`,
  };

  constructor(private httpClient: HttpClient) {}

  getCurrentUser(): Observable<GetCurrentUserResponsePayload> {
    return this.httpClient.get<GetCurrentUserResponsePayload>(
      this.urls.getCurrentUser
    );
  }
}
