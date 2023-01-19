import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { GetPartListResponsePayload } from '@ddd-architecture/shared/contracts';

@Injectable({
  providedIn: 'root',
})
export class PartListDataService {
  // todo GetPartListResponsePayload mock
  loadPartList(): Observable<GetPartListResponsePayload> {
    return of({} as GetPartListResponsePayload).pipe(delay(1000));
  }
}
