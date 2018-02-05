import { TestBed, inject } from '@angular/core/testing';

import { RolesPrivilegesService } from './roles-privileges.service';

describe('RolesPrivilegesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolesPrivilegesService]
    });
  });

  it('should be created', inject([RolesPrivilegesService], (service: RolesPrivilegesService) => {
    expect(service).toBeTruthy();
  }));
});
