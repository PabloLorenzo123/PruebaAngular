import { TestBed } from '@angular/core/testing';

import { CoveragesService } from './coverages.service';

describe('CoveragesService', () => {
  let service: CoveragesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoveragesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
