import { TestBed } from '@angular/core/testing';

import { ApprovedlistService } from './approvedlist.service';

describe('ApprovedlistService', () => {
  let service: ApprovedlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovedlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
