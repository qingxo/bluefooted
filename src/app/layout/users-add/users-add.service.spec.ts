import { TestBed, inject } from '@angular/core/testing';

import { UsersAddService } from './users-add.service';

describe('RolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersAddService]
    });
  });

  it('should be created', inject([UsersAddService], (service: UsersAddService) => {
    expect(service).toBeTruthy();
  }));
});
