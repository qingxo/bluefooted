import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
// import { DialogConditionComponent } from '../dialog-condition';
import { RolesService } from './roles.service';
import * as moment from 'moment';
import { RolesAddComponent } from '../roles-add/roles-add.component';
import { RolesPrivilegesComponent } from '../roles-privileges/roles-privileges.component';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [RolesService]
})
export class RolesComponent implements OnInit {


  rolesList: any = [];

  radioValue: any = '0';
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

  getRolesList() {
    // const data = {};
    // this.rolesService.getList(data).subscribe((res) => {
    //   if (res.success) {
    //     this.rolesList = res.data;
    //   }
    // });

    this.rolesList = [{
      'role_no': 'admin_hskh',
      'role_name': '护士考核管理员'
    }, {
      'role_no': 'admin_pda',
      'role_name': 'PDA管理员角色'
    }, {
      'role_no': 'admin_role',
      'role_name': '系统管理角色'
    }, {
      'role_no': 'admin_sbjk',
      'role_name': '设备监控管理员角色'
    }]
  }

  // 添加、编辑提交表单
  submitForm(roleInfo, isEdit) {
    console.log(roleInfo, isEdit);
    if (isEdit) {
      // 编辑
      this.rolesService.addRole(roleInfo).subscribe(res => {
        // 刷新列表
      });
    } else {
      // 添加
      this.rolesService.addRole(roleInfo).subscribe(res => {
        // 刷新列表
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
