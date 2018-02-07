import { Component, OnInit } from '@angular/core';
declare var JitsiMeetExternalAPI: any;

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

  initMeeting() {

    this.options = {
      roomName: 'JitsiMeetAPIExample',
      width: this.meetingWidth,
      height: this.meetingHeight,
      parentNode: document.querySelector('#meet')
    };
    console.log(this.options);

    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }
}
