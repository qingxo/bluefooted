import { Component, OnInit, Output, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
// import { DialogConditionComponent } from '../dialog-condition';
import { UsersPrivilegesService } from './users-privileges.service';
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
    console.log('点击了确定');
    this.isVisible = false;
    //console.log(this.role);
    this.submitForm();
    // this.fired.emit({
    //   userInfo: this.validateForm.value,
    //   isEdit: this.isEdit
    // });
  }

  handleCancel = (e) => {
    console.log(e);
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
    const userId = this.userInfo.userId,
      menus = this.menus;

    // 获取勾选的所有角色id
    let checkedArr = [];
    this.menus.forEach((item, index) => {
      if (item.checked) {
        checkedArr.push(item.id);
      }
      item.children.forEach((subItem, index) => {
        if (subItem.checked) {
          checkedArr.push(subItem.id);
        }
      });
    });
    console.log(checkedArr);
    // this.usersPrivilegesService.updatePrivileges(userId, menus).subscribe(res => {

    // });
  }
  changeGrand(grand) {
    const checked = grand.checked;
    grand.children && grand.children.forEach((item, index) => {
      item.checked = checked;
      item.children && item.children.forEach((subItem, index) => {
        subItem.checked = checked;
      })
    })

    grand.checked = true;
    grand.children && grand.children.forEach((item, index) => {
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
    grand.children && grand.children.forEach((item, index) => {
      if (!item.checked) {
        grand.checked = false;
      }
    })

    console.log(parent.checked)
    parent.children && parent.children.forEach((item, index) => {
      item.checked = parent.checked;
    })

  }
  getPrivileges(userId) {
    this.usersPrivilegesService.getPrivileges(userId).subscribe((res) => {
      this.menus = res.data;
    })
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
