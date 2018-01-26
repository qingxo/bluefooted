import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menu: Array<any> = [
    { name: '工作站', img: 'anticon-home', child: [{ name: '我的首页', url: '/' }] },
    { name: '患者档案', img: 'anticon-user', child: [{ name: '患者查询', url: '/search' }, { name: '患者主索引', url: '/person' }] },
    { name: '患者管理', img: 'anticon-setting', child: [{ name: '患者管理', url: '/manange' }, { name: '推介患者', url: '/todo' }] }
  ];
  choosePageName: String = '我的首页';
  choosePageUrl: String = '/';
  constructor() { }

  ngOnInit() {
  }

  isOpen() {
    setTimeout(() => {
      this.activatedPage({ name: this.choosePageName, url: this.choosePageUrl });
    }, 0);
  }

  activatedPage(pageInfo) {
    this.choosePageName = pageInfo.name;
    this.choosePageUrl = pageInfo.url;
    const pList = document.getElementsByClassName('sec-menu');
    for (let i = 0; i < pList.length; i++) {
      const tmpList = pList[i].children;
      for (let j = 0; j < tmpList.length; j++) {
        tmpList[j].className = 'ant-menu-item';
        if (tmpList[j].getAttribute('ng-reflect-router-link') === this.choosePageUrl) {
          tmpList[j].className = 'ant-menu-item ant-menu-item-selected';
        }
      }

    }
  }

  menuActivatedPage(pageInfo) {
    this.choosePageName = pageInfo.name;
    this.choosePageUrl = pageInfo.url;
  }

}
