import { TestBed } from '@angular/core/testing';

import { DiscoverSectionService } from './discover-section.service';

describe('DiscoverSectionService', () => {
  let service: DiscoverSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoverSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
