import { TestBed, inject } from '@angular/core/testing';

import { PatientsSearchService } from './patients-search.service';

describe('PatientsSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientsSearchService]
    });
  });

  it('should be created', inject([PatientsSearchService], (service: PatientsSearchService) => {
    expect(service).toBeTruthy();
  }));
});
