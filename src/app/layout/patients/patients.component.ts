import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
// import { DialogConditionComponent } from '../dialog-condition';
import { PatientsService } from './patients.service';
import * as moment from 'moment';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [PatientsService]
})
export class PatientsComponent implements OnInit {

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
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private patientsService: PatientsService) { }

  ngOnInit() {
    this.refreshList();
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

    this.patientsService.getList(data).subscribe((res) => {
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

  showModal() {
    // const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogConditionComponent);
    // const containerRef = this.viewContainerRef;
    // containerRef.clear();
    // const dd = <DialogConditionComponent>containerRef.createComponent(componentFatory).instance;
    // dd.initMoreInfo(this.moreInfo);
    // dd.fired.subscribe((res) => {
    //   this.moreInfo = res;
    //   this.refreshList();
    // });
  }

}
