import { Component, OnInit, Output, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
// import { DialogConditionComponent } from '../dialog-condition';
import { UsersPrivilegesService } from './users-privileges.service';
import tools from '../../shared/tools';
@Component({
  selector: 'app-users-privileges',
  templateUrl: './users-privileges.component.html',
  styleUrls: ['./users-privileges.component.scss'],
  providers: [UsersPrivilegesService],
  encapsulation: ViewEncapsulation.None
})
export class UsersPrivilegesComponent implements OnInit {


  constructor(private usersPrivilegesService: UsersPrivilegesService) { }
  isVisible = false;
  menus: Array<any> = [];
  modalTitle: String = '权限分配-';
  userInfo: any;
  @Output() fired = new EventEmitter<any>();
  showModal = () => {
    //console.log();
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.isVisible = false;
    this.submitForm();
    // this.fired.emit();
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }
  ngOnInit() {
    this.showModal();
  }
  initMoreInfo(userInfo) {
    this.modalTitle += userInfo.userName;
    this.userInfo = userInfo;
    this.getPrivileges(userInfo.userId);
  }
  submitForm() {
    console.log(this.menus);
    let userId = this.userInfo.userId,
      roleIdArr = [],
      roleIdStr;

    this.menus.forEach((parent, index) => {
      parent['children'].forEach((child, index) => {
        if (child.checked) {
          roleIdArr.push(child.fId);
        }
      });
    });
    roleIdStr = roleIdArr.join(',');

    this.usersPrivilegesService.addRoles(userId, roleIdStr).subscribe(res => {
      if (res['success']) {
        tools.tips('提示', '保存成功', 'success');
        this.isVisible = false;
      } else {
        tools.tips('提示', '保存失败', 'error');
      }
    });
  }
  getPrivileges(userId) {
    this.usersPrivilegesService.getPrivileges(userId).subscribe((res) => {
      this.menus = res.data;
      // this.menus = this.menuMock.data;
    })
  }
  // 选中还是不选中
  doCheck(parent, child) {
    if (child) {
      // childRadio changed
      let checked = parent.children.some((child, index) => {
        return child.checked;
      })
      parent.checked = checked;
    } else {
      // parentRadio changed
      let checked = parent.checked;
      parent.children.forEach((child, index) => {
        child.checked = checked;
      })
    }
  }

  menuMock = {
    "data":
      [{
        "id": 1, "fId": null, "dataId": "MM", "name": "数据中心监控管理", "checked": false, "type": null, "note": "0",
        "children": [
          { "id": 1, "fId": "111111", "dataId": "MM", "name": "系统管理1", "checked": true, "type": null, "note": null, "children": null, "url": null },
          { "id": 1, "fId": "111112", "dataId": "MM", "name": "系统管理2", "checked": true, "type": null, "note": null, "children": null, "url": null },
          { "id": 1, "fId": "111113", "dataId": "MM", "name": "系统管理3", "checked": true, "type": null, "note": null, "children": null, "url": null }
        ],
        "url": ""
      },
      {
        "id": 2, "fId": null, "dataId": "YYH", "name": "医养护平台", "checked": false, "type": null, "note": "0",
        "children": [
          { "id": 1, "fId": "xxxxx1", "dataId": "MM", "name": "系统管理1", "checked": true, "type": null, "note": null, "children": null, "url": null },
          { "id": 1, "fId": "xxxxx2", "dataId": "MM", "name": "系统管理2", "checked": true, "type": null, "note": null, "children": null, "url": null },
          { "id": 1, "fId": "xxxxx3", "dataId": "MM", "name": "系统管理3", "checked": true, "type": null, "note": null, "children": null, "url": null }
        ],
        "url": null
      }], "success": true
  }
  // allChecked = false;
  // indeterminate = true;
  // menus = {
  //   "data": [{
  //     'checked': true,
  //     'role_id': 1,
  //     'role_name': '系统管理角色'
  //   }, {
  //     'checked': true,
  //     'role_id': 2,
  //     'role_name': 'PDA管理员角色'
  //   }, {
  //     'checked': true,
  //     'role_id': 3,
  //     'role_name': '护士考核管理员'
  //   }]
  // };

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
