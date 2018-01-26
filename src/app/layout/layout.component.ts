import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menu: Array<any> = [
    { name: '工作站', img: 'anticon-home' child: [{ name: '我的首页', url: '/' }] },
    { name: '患者档案', img: 'anticon-user', child: [{ name: '患者查询', url: '/search' }, { name: '患者主索引', url: '/person' }] },
    { name: '患者管理', img: 'anticon-setting' child: [{ name: '患者管理', url: '/manange' }, { name: '推介患者', url: '/todo' }] }
  ];
  constructor() { }

  ngOnInit() {
  }

}
