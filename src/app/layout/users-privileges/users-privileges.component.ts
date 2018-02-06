import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
  modalTitle: String = '权限分配-';
  showModal = () => {
    //console.log();
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
    //console.log(this.role);
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }
  ngOnInit() {
    this.showModal();
  }
  initMoreInfo(roleInfo) {
    this.modalTitle += roleInfo.loginname;
  }
  checkRadio(grand) {
    // const checked = grand.checked;
    // grand.children.forEach((item, index) => {
    //   item.checked = checked;
    //   item.children.forEach((subItem, index) => {
    //     subItem.checked = checked;
    //   })
    // })

    // grand.checked = true;
    // grand.children.forEach((item, index) => {
    //   if (!item.checked) {
    //     grand.checked = false;
    //   }
    // })
  }
  // allChecked = false;
  // indeterminate = true;
  menus = {
    "data": [{
      'checked': true,
      'role_id': 1,
      'role_name': '系统管理角色'
    }, {
      'checked': true,
      'role_id': 2,
      'role_name': 'PDA管理员角色'
    }, {
      'checked': true,
      'role_id': 3,
      'role_name': '护士考核管理员'
    }]
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
