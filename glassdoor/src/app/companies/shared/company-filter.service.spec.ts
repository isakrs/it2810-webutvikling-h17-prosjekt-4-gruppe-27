import { TestBed, inject } from '@angular/core/testing';

import { CompanyFilterService } from './company-filter.service';

describe('CompanyFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyFilterService]
    });
  });

  it('should be created', inject([CompanyFilterService], (service: CompanyFilterService) => {
    expect(service).toBeTruthy();
  }));
});
