import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { GetPartListResponsePayload } from '@ddd-architecture/shared/contracts';
import { partListMock } from './part-list.mock';

@Injectable({
  providedIn: 'root',
})
export class PartListDataService {
  loadPartList(): Observable<GetPartListResponsePayload> {
    return of(partListMock).pipe(delay(1000));
  }
}
