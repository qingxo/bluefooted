import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
// import { DialogConditionComponent } from '../dialog-condition';
import { RolesService } from './roles.service';
import * as moment from 'moment';
import { RolesAddComponent } from '../roles-add/roles-add.component';
import { RolesPrivilegesComponent } from '../roles-privileges/roles-privileges.component';
import tools from '../../shared/tools';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [RolesService]
})
export class RolesComponent implements OnInit {


  rolesList: any = [];
  pageSize = 10;
  pageNumber = 1;
  pages: Array<any> = [];
  totalPage: number;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private rolesService: RolesService) { }

  ngOnInit() {
    this.getRolesList();
  }

  // searchInfo(info) {
  //   this.refreshList();
  // }
  pageTurning(number) {
    this.pageNumber = number;
    this.getRolesList();
  }
  getRolesList() {
    const data = {};
    this.rolesService.getList({
      pageSize: this.pageSize,
      pageNum: this.pageNumber
    }).subscribe((res) => {
      if (res.success) {
        this.rolesList = res.data.list;
        this.pages = res.data.navigatepageNums;
        this.pageNumber = res.data.pageNum;
        this.totalPage = res.data.total;
      }
    });
  }
  deleteRole(roleId) {
    tools.tipsConfirm('提示', '确定删除该用户吗？', () => {
      this.rolesService.deleteRole(roleId).subscribe(res => {
        if (res.success) {
          tools.tips('提示', '删除成功', 'success');
          // 刷新列表
          this.getRolesList();
        } else {
          tools.tips('提示', res.errMsg, 'error');
        }
      });
    });
  }
  // 添加、编辑提交表单
  submitForm(roleInfo, isEdit) {
    console.log(roleInfo, isEdit);
    if (isEdit) {
      // 编辑
      this.rolesService.addRole(roleInfo).subscribe(res => {
        tools.tips('提示', '编辑成功', 'success');
        this.getRolesList();
      });
    } else {
      // 添加
      this.rolesService.addRole(roleInfo).subscribe(res => {
        // 刷新列表
        tools.tips('提示', '添加成功', 'success');
        this.getRolesList();
      });
    }

  }
  showModal(roleInfo) {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(RolesAddComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <RolesAddComponent>containerRef.createComponent(componentFatory).instance;
    dd.initMoreInfo(roleInfo);
    dd.fired.subscribe(res => {
      this.submitForm(res.roleInfo, res.isEdit);
    });
  }
  showPrivilegesModal(roleInfo) {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(RolesPrivilegesComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <RolesPrivilegesComponent>containerRef.createComponent(componentFatory).instance;
    dd.initMoreInfo(roleInfo);
    // dd.fired.subscribe((res) => {
    //   this.moreInfo = res;
    //   this.refreshList();
    // });
  }
}
