import { Component, OnInit, Output, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
// import { DialogConditionComponent } from '../dialog-condition';
import { RolesPrivilegesService } from './roles-privileges.service';
@Component({
  selector: 'app-roles-privileges',
  templateUrl: './roles-privileges.component.html',
  styleUrls: ['./roles-privileges.component.scss'],
  providers: [RolesPrivilegesService],
  encapsulation: ViewEncapsulation.None
})
export class RolesPrivilegesComponent implements OnInit {


  constructor(private rolesPrivilegesService: RolesPrivilegesService) { }
  isVisible = false;
  modalTitle: String = '角色权限-';
  @Output() fired = new EventEmitter<any>();
  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    //this.fired.emit();
    this.isVisible = false;
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }
  ngOnInit() {
    this.showModal();
  }
  initMoreInfo(roleInfo) {
    this.modalTitle += roleInfo.role_name;
    //this.roleId = roleInfo.role_no;
  }
  changeGrand(grand) {
    const checked = grand.checked;
    grand.children.forEach((item, index) => {
      item.checked = checked;
      item.children.forEach((subItem, index) => {
        subItem.checked = checked;
      })
    })

    grand.checked = true;
    grand.children.forEach((item, index) => {
      if (!item.checked) {
        grand.checked = false;
      }
    })
  }
  changeChildren(grand, parent) {
    parent.checked = true;
    parent.children.forEach((item, index) => {
      if (!item.checked) {
        parent.checked = false;
      }
    })

    grand.checked = true;
    grand.children.forEach((item, index) => {
      if (!item.checked) {
        grand.checked = false;
      }
    })
  }
  changeParent(grand, parent) {
    grand.checked = true;
    grand.children.forEach((item, index) => {
      if (!item.checked) {
        grand.checked = false;
      }
    })

    console.log(parent.checked)
    parent.children.forEach((item, index) => {
      item.checked = parent.checked;
    })

  }
  // allChecked = false;
  // indeterminate = true;
  menus = {
    "data": [
      {
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
        "url": ""
      },
      {
        "id": 2,
        "fId": null,
        "dataId": "YYH",
        "name": "医养护平台",
        "checked": false,
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
        "url": null
      }
    ],
    "success": true
  };

  // updateAllChecked() {
  //   this.indeterminate = false;
  //   if (this.allChecked) {
  //     this.checkOptionsOne.forEach(item => item.checked = true);
  //   } else {
  //     this.checkOptionsOne.forEach(item => item.checked = false);
  //   }
  // }

  // updateSingleChecked() {
  //   if (this.checkOptionsOne.every(item => item.checked === false)) {
  //     this.allChecked = false;
  //     this.indeterminate = false;
  //   } else if (this.checkOptionsOne.every(item => item.checked === true)) {
  //     this.allChecked = true;
  //     this.indeterminate = false;
  //   } else {
  //     this.indeterminate = true;
  //   }
  // }

}
