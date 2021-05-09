import { TestBed } from '@angular/core/testing';

import { VaccineApiService } from './vaccine-api.service';

describe('VaccineApiService', () => {
  let service: VaccineApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccineApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
