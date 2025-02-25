import { TestBed } from '@angular/core/testing';

import { MatIconServiceService } from './mat-icon-service.service';

describe('MatIconServiceService', () => {
  let service: MatIconServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatIconServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
