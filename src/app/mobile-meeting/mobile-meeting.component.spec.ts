import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMeetingComponent } from './mobile-meeting.component';

describe('MobileMeetingComponent', () => {
  let component: MobileMeetingComponent;
  let fixture: ComponentFixture<MobileMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
