import { Component, OnInit, Input } from '@angular/core';
import Infos from '../shared/Infos';

declare var AgoraRTC: any;

@Component({
  selector: 'app-mobile-meeting',
  templateUrl: './mobile-meeting.component.html',
  styleUrls: ['./mobile-meeting.component.scss']
})
export class MobileMeetingComponent implements OnInit {

  // @Input() channel: any = (Math.random() * 10000).toFixed();
  @Input() channel: any = '1000';
  appid: any = Infos.appid;
  meetingWidth: Number = window.screen.width;
  meetingHeight: Number = window.screen.height;
  client = AgoraRTC.createClient({ mode: 'interop' });
  localStream: any;
  constructor() { }

  ngOnInit() {
  }


  initMeeting() {
    this.initClient();
  }

  closeMeeting() {
    this.leave();
  }

  initClient() {
    // 初始化 Client 对象
    /*
    client.init
    @param: appid - appid
    @param: callback - success callback
    return: null
    */
    this.client.init(this.appid, () => {
      console.log('AgoraRTC client initialized ');
      this.client.join(null, this.channel, undefined, (uid) => {
        console.log('User ' + uid + ' join channel successfully');
        console.log('Timestamp: ' + Date.now());
        const options: any = {
          streamID: uid,
          audio: true,
          video: true,
          screen: false,
          extensionId: 'minllpmhdgpndnkomcoccfekfegnlikg'
        };

        this.initStream(options);
      });
    });

    this.initEvent();
  }

  initStream(options) {
    // 创建本地流, 修改对应的参数可以指定启用/禁用特定功能
    this.localStream = AgoraRTC.createStream(options);
    this.localStream.setVideoProfile('480p_4');
    this.localStream.init(() => {
      console.log('Local stream initialized');
      this.initPlay();

      this.client.on('stream-published', function (evt) {
        console.log('Publish local stream successfully');
      });

      this.client.publish(this.localStream, function (err) {
        console.log('Publish stream failed', err);
      });
    });


  }

  initEvent() {
    // 监听流事件
    /*
    client.on
    @param: listen to stream event
    @param: callback listener callback
    @return: null
    @event: stream-added when new stream added to channel
    */

    /*
    client.subscribe
    @param: stream stream to subscribe
    @param: callback failing callback
    @return: null
    */
    this.client.on('stream-added', (evt) => {
      const stream = evt.stream;
      console.log('New stream added: ' + stream.getId());
      console.log('Timestamp: ' + Date.now());
      console.log('Subscribe ', stream);
      // 在有新的流加入后订阅远端流
      this.client.subscribe(stream, function (err) {
        console.log('Subscribe stream failed', err);
      });
    });

    /*
    @event: peer-leave when existing stream left the channel
    */
    this.client.on('peer-leave', function (evt) {
      console.log('Peer has left: ' + evt.uid);
      console.log('Timestamp: ' + Date.now());
      console.log(evt);
    });

    /*
    @event: stream-subscribed when a stream is successfully subscribed
    */
    this.client.on('stream-subscribed', (evt) => {
      const stream = evt.stream;
      console.log('Got stream-subscribed event');
      this.delRemoteChild();
      stream.play('remote-meet');
    });

    /*
    @event: stream-removed when a stream is removed
    */
    this.client.on('stream-removed', function (evt) {
      const stream = evt.stream;
      console.log('Stream removed: ' + evt.stream.getId());
      console.log('Timestamp: ' + Date.now());
      console.log(evt);
    });
    // this.initPlay();
  }

  initPlay() {
    // 将本地流在id为meet的dom中播放
    this.client.publish(this.localStream, function (err) {
      console.log('Publish local stream error: ' + err);
    });

    this.client.on('stream-published', function (evt) {
      console.log('Publish local stream successfully');
    });
    this.localStream.play('meet');
  }

  delRemoteChild() {
    const div = document.getElementById('remote-meet');
    while (div.hasChildNodes()) {
      div.removeChild(div.firstChild);
    }
  }

  leave() {
    this.client.leave(() => {
      console.log('Leavel channel successfully');
      this.delRemoteChild();
    }, function (err) {
      console.log('Leave channel failed');
    });
  }

  publish() {
    this.client.publish(this.localStream, function (err) {
      console.log('Publish local stream error: ' + err);
    });
  }

  unpublish() {
    this.client.unpublish(this.localStream, function (err) {
      console.log('Unpublish local stream failed' + err);
    });
  }
}
