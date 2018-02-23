import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import storage from '../shared/storage';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // menu: Array<any> = [
  //   { name: '工作站', img: 'anticon-home', child: [{ name: '我的首页', url: '/' }] },
  //   { name: '患者档案', img: 'anticon-user', child: [{ name: '患者查询', url: '/search' }, { name: '患者主索引', url: '/person' }] },
  //   { name: '患者管理', img: 'anticon-setting', child: [{ name: '患者管理', url: '/manange' }, { name: '推介患者', url: '/todo' }] },
  //   { name: '系统管理', img: 'anticon-setting', child: [{ name: '用户管理', url: '/users' }, { name: '角色管理', url: '/roles' }] }
  // ];
  menu: Array<any>;
  choosePageName: String = '我的首页';
  choosePageUrl: String = '/index';
  menuSelected: String = '/index';
  isCollapsed: Boolean = false;
  constructor(public router: Router) { }

  ngOnInit() {
    this.initStartMenu({ url: this.router['url'] });
  }

  initStartMenu(data) {
    this.menu = storage.get('menu')['menu'];
    this.menu = this.menu[0].children;

    let tmpName = '';
    for (let i = 0; i < this.menu.length; i++) {
      const tmp = this.menu[i].children;
      if (tmp.length > 0) {
        for (let j = 0; j < tmp.length; j++) {
          if (data.url === tmp[j].url) {
            tmpName = tmp[j].name;
            this.menuSelected = tmp[j].url;
          }
        }
      }
    }

    this.activatedPage({ url: data.url, name: tmpName });
  }
  menuShow(flag) {
    flag === 'false' ? this.isCollapsed = false : this.isCollapsed = true;
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
          console.log(this.choosePageUrl)
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
