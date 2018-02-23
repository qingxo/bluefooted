import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { UsersAddComponent } from '../users-add/users-add.component';
import { UsersPrivilegesComponent } from '../users-privileges/users-privileges.component';
import { UsersService } from './users.service';
import * as moment from 'moment';
import tools from '../../shared/tools';
//import { userInfo } from 'os';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  userList: any = [];
  pageSize = 10;
  pageNumber = 1;
  pages: Array<any> = [];
  totalPage: number;
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
  pageTurning(number) {
    this.pageNumber = number;
    this.getUserList();
  }
  getUserList() {

    this.usersService.getList({
      pageSize: this.pageSize,
      pageNum: this.pageNumber
    }).subscribe((res) => {
      if (res.success) {
        this.userList = res.data.list;
        this.pages = res.data.navigatepageNums;
        this.pageNumber = res.data.pageNum;
        this.totalPage = res.data.total;
      } else {
        this.userList = [];
      }
    });
    // this.userList = [{
    //   'userName': '张惠珍',
    //   'loginName': 'ZHZ',
    //   'department': 'ICU'
    // }, {
    //   'userName': '谢凤英',
    //   'loginName': 'L2458',
    //   'department': '门诊部'
    // }, {
    //   'userName': '吴娟',
    //   'loginName': 'L2457',
    //   'department': '财务科'
    // }, {
    //   'userName': '林丽月',
    //   'loginName': 'L2456',
    //   'department': '放诊科'
    // }]
  }

  // 添加、编辑提交表单
  submitForm(userInfo, isEdit) {
    console.log(userInfo, isEdit);
    if (isEdit) {
      // 编辑
      const data = {
        userName: userInfo.userName,
        loginName: userInfo.loginName,
        userId: userInfo.userId
      }
      console.log(userInfo)
      this.usersService.editUser(data).subscribe(res => {
        // 刷新列表
        tools.tips('提示', '编辑成功', 'success');
        this.getUserList();
      });
    } else {
      // 添加

      userInfo['type'] = 1;
      console.log(userInfo);
      this.usersService.addUser(userInfo).subscribe(res => {
        // 刷新列表
        tools.tips('提示', '添加成功', 'success');
        this.getUserList();
      });
    }

  }

  deleteUser(userId) {
    tools.tipsConfirm('提示', '确定删除该用户吗？', () => {
      this.usersService.deleteUser(userId).subscribe(res => {
        if (res.success) {
          tools.tips('提示', '删除成功', 'success');
          this.getUserList();
        } else {
          tools.tips('提示', res.errMsg, 'error');
        }
      });

    })
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
    //   this.setRoles(res.userId);
    // });
  }

}
