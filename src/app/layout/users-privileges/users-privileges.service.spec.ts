import { TestBed, inject } from '@angular/core/testing';

import { UsersPrivilegesService } from './users-privileges.service';

describe('RolesPrivilegesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersPrivilegesService]
    });
  });

  it('should be created', inject([UsersPrivilegesService], (service: UsersPrivilegesService) => {
    expect(service).toBeTruthy();
  }));
});
