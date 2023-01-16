import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartListDataService {
  loadPartList(): Observable<unknown> {
    return of(null).pipe(delay(1000));
  }
}
