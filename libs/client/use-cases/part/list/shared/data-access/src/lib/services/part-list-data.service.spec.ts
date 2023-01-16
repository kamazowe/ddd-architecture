import { TestBed } from '@angular/core/testing';

import { PartListDataService } from './part-list-data.service';

describe('PartListDataService', () => {
  let service: PartListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
