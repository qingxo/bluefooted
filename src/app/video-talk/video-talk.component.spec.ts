import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTalkComponent } from './video-talk.component';

describe('VideoTalkComponent', () => {
  let component: VideoTalkComponent;
  let fixture: ComponentFixture<VideoTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
