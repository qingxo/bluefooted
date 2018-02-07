import { Component, OnInit } from '@angular/core';

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

  }

}
