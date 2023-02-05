import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PartListEffects } from './part-list.effects';
import { PartListDataService } from '../services/part-list-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PartListEffects', () => {
  let actions$: Observable<any>;
  let effects: PartListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PartListEffects,
        provideMockActions(() => actions$),
        PartListDataService,
      ],
    });

    effects = TestBed.inject(PartListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
