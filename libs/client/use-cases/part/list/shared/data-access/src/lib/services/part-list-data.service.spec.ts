import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PartListDataService } from './part-list-data.service';

describe('PartListDataService', () => {
  let service: PartListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PartListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
