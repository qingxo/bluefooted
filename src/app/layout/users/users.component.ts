import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { UsersAddComponent } from '../users-add/users-add.component';
import { UsersPrivilegesComponent } from '../users-privileges/users-privileges.component';
import { UsersService } from './users.service';
import * as moment from 'moment';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  userList: any = [];
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private usersService: UsersService) { }

  ngOnInit() {
    this.getUserList();
  }

  // searchInfo(info) {
  //   this.refreshList();
  // }

  getUserList() {

    // this.usersService.getList(data).subscribe((res) => {
    //   if (res.success) {
    //     this.list = res.data;
    //   } else {
    //     this.list = [];
    //   }
    // });
    this.userList = [{
      'name': '张惠珍',
      'loginname': 'ZHZ',
      'department': 'ICU'
    }, {
      'name': '谢凤英',
      'loginname': 'L2458',
      'department': '门诊部'
    }, {
      'name': '吴娟',
      'loginname': 'L2457',
      'department': '财务科'
    }, {
      'name': '林丽月',
      'loginname': 'L2456',
      'department': '放诊科'
    }]
  }

  // 添加、编辑提交表单
  submitForm(roleInfo, isEdit) {
    console.log(roleInfo, isEdit);
    if (isEdit) {
      // 编辑
      this.usersService.editUser(roleInfo).subscribe(res => {
        // 刷新列表
      });
    } else {
      // 添加
      this.usersService.addUser(roleInfo).subscribe(res => {
        // 刷新列表
      });
    }

  }

  showModal(userInfo) {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(UsersAddComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <UsersAddComponent>containerRef.createComponent(componentFatory).instance;
    dd.initMoreInfo(userInfo);
    dd.fired.subscribe((res) => {
      this.submitForm(res.userInfo, res.isEdit);
    });
  }

  showModalPrivileges(userInfo) {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(UsersPrivilegesComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <UsersPrivilegesComponent>containerRef.createComponent(componentFatory).instance;
    dd.initMoreInfo(userInfo);
    // dd.fired.subscribe((res) => {
    //   this.moreInfo = res;
    //   this.refreshList();
    // });
  }

}
