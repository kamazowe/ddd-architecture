import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GetFeatureTogglesResponsePayload,
  getFeatureTogglestUrl,
} from '@ddd-architecture/shared/contracts';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FeatureToggleDataService {
  private readonly urls = {
    getFeatureToggles: `api/${getFeatureTogglestUrl}`,
  };

  constructor(private httpClient: HttpClient) {}

  getFeatureToggles(): Observable<GetFeatureTogglesResponsePayload> {
    return this.httpClient.get<GetFeatureTogglesResponsePayload>(
      this.urls.getFeatureToggles
    );
  }
}
