import { TestBed, inject } from '@angular/core/testing';

import { RolesAddService } from './roles-add.service';

describe('RolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolesAddService]
    });
  });

  it('should be created', inject([RolesAddService], (service: RolesAddService) => {
    expect(service).toBeTruthy();
  }));
});
