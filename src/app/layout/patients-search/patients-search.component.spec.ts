import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsSearchComponent } from './patients-search.component';

describe('PatientsSearchComponent', () => {
  let component: PatientsSearchComponent;
  let fixture: ComponentFixture<PatientsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
