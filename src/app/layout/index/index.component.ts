import { Component, OnInit } from '@angular/core';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title = 'app';
  domain: String = 'meet.jit.si';
  options: any;
  api: any;
  meetingWidth: Number = 700;
  meetingHeight: Number = 700;
  constructor() { }

  ngOnInit() {
    this.initMeeting();
  }

  initMeeting() {

    this.options = {
      roomName: 'JitsiMeetAPIExample',
      width: 700,
      height: 700,
      parentNode: document.querySelector('#meet')
    };

    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }
}
