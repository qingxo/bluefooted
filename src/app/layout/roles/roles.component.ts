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

  hospitalInfo = 0;
  list: any = [];
  moreInfo: any = null;
  patientName = '';
  selectOptions: any = [
    { value: 1, label: '全部' },
    { value: 2, label: '本组' },
    { value: 3, label: '本人' }
  ];
  selectedValue: any = this.selectOptions[0].value;
  selectOptions2: any = [
    { value: 1, label: '在院' },
    { value: 2, label: '待归档' },
    { value: 3, label: '已归档' }
  ];
  selectedValue2: any = this.selectOptions2[0].value;
  selectOptions3: any = [
    { value: 1, label: '病案号' },
    { value: 2, label: '姓名' }
  ];
  selectedValue3: any = this.selectOptions3[0].value;

  radioValue: any = '0';
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private rolesService: RolesService) { }

  ngOnInit() {
    //this.refreshList();
  }

  searchInfo(info) {
    this.patientName = info;
    this.refreshList();
  }

  refreshList() {
    const data = { distinct: 'distinct' };
    if (this.moreInfo !== null) {
      Object.assign(data, this.moreInfo);
      if (data['startDate']) {
        data['startDate'] = moment(data['startDate']).format('YYYY-MM-DD');
      }
      if (data['endDate']) {
        data['endDate'] = moment(data['endDate']).format('YYYY-MM-DD');
      }
    }
    if (this.patientName != '') {
      data['name'] = this.patientName;
    }

    data['status'] = this.hospitalInfo;

    this.rolesService.getList(data).subscribe((res) => {
      if (res.success) {
        this.list = res.data;
      } else {
        this.list = [];
      }
    });
  }

  firedInfo(num) {
    this.hospitalInfo = num;
    this.refreshList();
  }

  showModal(roleInfo) {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(RolesAddComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <RolesAddComponent>containerRef.createComponent(componentFatory).instance;
    dd.initMoreInfo(roleInfo);
    // dd.fired.subscribe((res) => {
    //   this.moreInfo = res;
    //   this.refreshList();
    // });
  }
  showPrivilegesModal(roleName) {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(RolesPrivilegesComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <RolesPrivilegesComponent>containerRef.createComponent(componentFatory).instance;
    dd.initMoreInfo(roleName);
    // dd.fired.subscribe((res) => {
    //   this.moreInfo = res;
    //   this.refreshList();
    // });
  }
}
