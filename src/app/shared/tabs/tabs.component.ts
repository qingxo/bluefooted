import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Infos from '../../shared/Infos';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit, OnChanges {

  @Input() activePage = '';
  @Input() activeUrl = '';
  @Output() fired: EventEmitter<any> = new EventEmitter<any>();
  @Output() tabInfo: EventEmitter<any> = new EventEmitter<any>();
  tabs = [
    {
      name: '我的首页',
      url: '/'
    }
  ];
  indexPageName = '我的首页';
  btnIndex = 0;
  @ViewChild('nzTabHeading') el: ElementRef;



  constructor(public route: ActivatedRoute, public router: Router) {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['activeUrl'] && changes['activeUrl']['currentValue'] !== '') {
      this.tabsOperate();
      this.activeTab();
    }
  }

  tabsOperate() {
    let addFlag = true;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].url === this.activeUrl) {
        addFlag = false;
        break;
      }
    }
    if (addFlag) {
      this.tabs.push({ name: this.activePage, url: this.activeUrl });
    }
    const data = { len: this.tabs.length, name: this.activePage, url: this.activeUrl };
    this.tabInfo.emit(data);
  }

  activeTab() {
    setTimeout(() => {
      if (this.activeUrl != null) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i].url === this.activeUrl) {
            this.btnIndex = i;
            break;
          }
        }
        const pList = document.getElementsByClassName('ant-tabs-tab');
        for (let i = 0; i < pList.length; i++) {
          pList[i].className = 'ant-tabs-tab ';
          if (i === this.btnIndex) {
            pList[i].className = 'ant-tabs-tab-active ant-tabs-tab ';
          }
        }
      }
    }, 1);

  }

  showTpl(info, index) {
    this.fired.emit(info);
    this.btnIndex = index;
    this.activeUrl = info.url;
    this.activeTab();
    this.goTabPages(info.url);
  }

  goTabPages(url) {
    this.router.navigate([url]);
  }

  ngOnInit() {
  }
  closeTab(tab, index) {
    const arr = this.tabs[this.btnIndex].url.split('/');
    const urlTarget = arr[arr.length - 1];
    if (this.btnIndex !== index) { // 关闭的页面，不是当前展示的页面时
      this.tabs.splice(this.tabs.indexOf(tab), 1);
    } else {
      this.tabs.splice(this.tabs.indexOf(tab), 1);
      const len = this.tabs.length - 1;
      index > len ? this.btnIndex = len : this.btnIndex = index;
      this.activeUrl = this.tabs[this.btnIndex].url;
      this.activeTab();
      this.goTabPages(this.tabs[this.btnIndex].url);

    }

    Infos['killUrl'] = urlTarget;
    const data = { len: this.tabs.length, url: this.activeUrl, name: this.tabs[this.btnIndex].name };
    this.tabInfo.emit(data);

  }



}
