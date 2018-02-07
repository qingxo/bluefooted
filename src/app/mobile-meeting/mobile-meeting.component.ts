import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-meeting',
  templateUrl: './mobile-meeting.component.html',
  styleUrls: ['./mobile-meeting.component.scss']
})
export class MobileMeetingComponent implements OnInit {
  title = 'app';
  domain: String = 'meet.jit.si';
  options: any;
  api: any;
  meetingWidth: Number = window.screen.width;
  meetingHeight: Number = window.screen.height;
  constructor() { }

  ngOnInit() {
  }

}
