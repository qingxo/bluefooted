import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-head-line',
  templateUrl: './head-line.component.html',
  styleUrls: ['./head-line.component.scss']
})
export class HeadLineComponent implements OnInit {

  isShow: Boolean = false;
  @Output() fired: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  headClick() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.fired.emit('true');
    } else {
      this.fired.emit('false');
    }
  }

}
