import { TestBed } from '@angular/core/testing';

import { ShowLeadServiceService } from './show-lead-service.service';

describe('ShowLeadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowLeadServiceService = TestBed.get(ShowLeadServiceService);
    expect(service).toBeTruthy();
  });
});
