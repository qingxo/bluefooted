import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
declare var easyrtc: any;
@Component({
  selector: 'app-video-talk',
  templateUrl: './video-talk.component.html',
  styleUrls: ['./video-talk.component.scss']
})
export class VideoTalkComponent implements OnInit {


  constructor(private cdr: ChangeDetectorRef) { }

  myId = '';
  connectedClientsList: Array<string> = [];

  ngOnInit() {

  }
  clearConnectList(): void {
    this.connectedClientsList = [];
    this.cdr.detectChanges();
  }

  performCall(clientEasyrtcId: string): void {
    const successCB = function (a: string, b: string): void { };
    const failureCB = function (a: string, b: string): void { };
    easyrtc.call(clientEasyrtcId, successCB, failureCB, undefined, undefined);
  }

  buildCaller(easyrtcid: string): (() => void) {
    return (): void => {
      this.performCall(easyrtcid);
    };
  }

  convertListToButtons(roomName: string, data: any, isPrimary: boolean): void {
    this.clearConnectList();
    for (const easyrtcid in data) {
      this.connectedClientsList.push(easyrtc.idToName(easyrtcid));
    }
    this.cdr.detectChanges();
  }

  updateMyEasyRTCId(myEasyRTCId: string): void {
    this.myId = myEasyRTCId;
    this.cdr.detectChanges();
  }

  loginSuccess(easyrtcid: string): void {
    this.updateMyEasyRTCId(easyrtc.cleanId(easyrtcid));
  }

  loginFailure(errorCode: string, message: string): void {
    this.updateMyEasyRTCId('Login failed. Reason: ' + message);
  }

  connect(): void {
    // easyrtc.setVideoDims(320, 240, undefined);
    easyrtc.setVideoDims();
    const convertListToButtonShim = (roomName: string, data: any, isPrimary: boolean): void => {
      this.convertListToButtons(roomName, data, isPrimary);
    };
    easyrtc.setRoomOccupantListener(convertListToButtonShim);
    easyrtc.easyApp('easyrtc.audioVideoSimple', 'videoSelf', ['videoCaller'], this.loginSuccess.bind(this), this.loginFailure.bind(this));
  }

  ngAfterViewInit() {
    this.connect();
  }

}
