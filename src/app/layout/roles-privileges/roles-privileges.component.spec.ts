import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPrivilegesComponent } from './roles-privileges.component';

describe('RolesPrivilegesComponent', () => {
  let component: RolesPrivilegesComponent;
  let fixture: ComponentFixture<RolesPrivilegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RolesPrivilegesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
