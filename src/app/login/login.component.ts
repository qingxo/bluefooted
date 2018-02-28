import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { LoginService } from './login.service';
import storage from '../shared/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }
  user = new User('', '', true);
  roleId = '111111';
  list = {
    "menu": [{
      "id": 1,
      "fId": null,
      "dataId": "MM",
      "name": "数据中心监控管理",
      "checked": true,
      "type": null,
      "note": "0",
      "children": [
        {
          "id": null,
          "fId": null,
          "dataId": "PI",
          "name": "患者档案",
          "checked": true,
          "type": null,
          "note": "",
          "children": [
            {
              "id": null,
              "fId": "INDE",
              "dataId": "PI",
              "name": "患者主索引",
              "checked": false,
              "type": null,
              "note": "",
              "children": [],
              "url": "/person"
            },
            {
              "id": null,
              "fId": "MANA",
              "dataId": "PI",
              "name": "患者查询",
              "checked": false,
              "type": null,
              "note": "",
              "children": [],
              "url": "/search"
            }
          ],
          "url": ""
        },
        {
          "id": null,
          "fId": null,
          "dataId": "SG",
          "name": "系统管理",
          "checked": false,
          "type": null,
          "note": "",
          "children": [
            {
              "id": null,
              "fId": "ROLE",
              "dataId": "SG",
              "name": "角色管理",
              "checked": false,
              "type": null,
              "note": "",
              "children": [
                {
                  "id": null,
                  "fId": null,
                  "dataId": "ROLE",
                  "name": "增加用户",
                  "checked": false,
                  "type": null,
                  "note": null,
                  "children": null,
                  "url": null
                }
              ],
              "url": "/roles"
            },
            {
              "id": null,
              "fId": "USER",
              "dataId": "SG",
              "name": "用户管理",
              "checked": false,
              "type": null,
              "note": "",
              "children": [],
              "url": "/users"
            }
          ],
          "url": ""
        },
        {
          "id": null,
          "fId": null,
          "dataId": "WK",
          "name": "工作站",
          "checked": false,
          "type": null,
          "note": "",
          "children": [
            {
              "id": null,
              "fId": "HOME",
              "dataId": "WK",
              "name": "我的首页",
              "checked": false,
              "type": null,
              "note": "",
              "children": [],
              "url": "/index"
            }
          ],
          "url": ""
        }
      ],
      'url': ''
    },
    {
      'id': 2,
      'fId': null,
      'dataId': 'YYH',
      'name': '医养护平台',
      'checked': false,
      'type': null,
      'note': '0',
      'children': [
        {
          'id': null,
          'fId': null,
          'dataId': 'PI',
          'name': '患者档案',
          'checked': true,
          'type': null,
          'note': '',
          'children': [
            {
              'id': null,
              'fId': 'INDE',
              'dataId': 'PI',
              'name': '患者主索引',
              'checked': false,
              'type': null,
              'note': '',
              'children': [],
              'url': '/person'
            },
            {
              'id': null,
              'fId': 'MANA',
              'dataId': 'PI',
              'name': '患者查询',
              'checked': false,
              'type': null,
              'note': '',
              'children': [],
              'url': '/search'
            }
          ],
          'url': ''
        },
        {
          'id': null,
          'fId': null,
          'dataId': 'SG',
          'name': '系统管理',
          'checked': false,
          'type': null,
          'note': '',
          'children': [
            {
              'id': null,
              'fId': 'ROLE',
              'dataId': 'SG',
              'name': '角色管理',
              'checked': false,
              'type': null,
              'note': '',
              'children': [
                {
                  'id': null,
                  'fId': null,
                  'dataId': 'ROLE',
                  'name': '增加用户',
                  'checked': false,
                  'type': null,
                  'note': null,
                  'children': null,
                  'url': null
                }
              ],
              'url': '/roles'
            },
            {
              'id': null,
              'fId': 'USER',
              'dataId': 'SG',
              'name': '用户管理',
              'checked': false,
              'type': null,
              'note': '',
              'children': [],
              'url': '/users'
            }
          ],
          'url': ''
        },
        {
          'id': null,
          'fId': null,
          'dataId': 'WK',
          'name': '工作站',
          'checked': false,
          'type': null,
          'note': '',
          'children': [
            {
              'id': null,
              'fId': 'HOME',
              'dataId': 'WK',
              'name': '我的首页',
              'checked': false,
              'type': null,
              'note': '',
              'children': [],
              'url': '/index'
            }
          ],
          'url': ''
        }
      ],
      'url': null
    }
    ]
  };
  ngOnInit() {
  }

  loginConfirm() {
    // this.router.navigate(['/']);
    this.initMenu();
  }

  initMenu() {
    // this.loginService.getMenuList(this.roleId).subscribe((res) => {
    //   if (res.success) {
    //     storage.set('menu', res.data);
    //     // const menu = eval(res.data);
    //     // this.router.navigate(['/' + menu[0].children[0].url.replace(new RegExp(/\./g), '/')]);
    //   }
    // });

    storage.set('menu', this.list);
    this.router.navigate(['/' + this.list.menu[0].children[0].url.replace(new RegExp(/\./g), '/')]);
  }

}
