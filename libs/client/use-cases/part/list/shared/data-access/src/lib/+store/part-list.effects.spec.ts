import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PartListEffects } from './part-list.effects';

describe('PartListEffects', () => {
  let actions$: Observable<any>;
  let effects: PartListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartListEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(PartListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
