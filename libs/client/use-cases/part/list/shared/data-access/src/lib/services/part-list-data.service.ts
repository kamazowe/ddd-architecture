import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GetPartListResponsePayload,
  getPartListUrl,
} from '@ddd-architecture/shared/contracts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PartListDataService {
  private readonly urls = {
    partList: `api/${getPartListUrl}`,
  };

  constructor(private httpClient: HttpClient) {}

  loadPartList(): Observable<GetPartListResponsePayload> {
    return this.httpClient.get<GetPartListResponsePayload>(this.urls.partList);
  }
}
