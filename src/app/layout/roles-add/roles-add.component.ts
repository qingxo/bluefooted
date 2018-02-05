import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
// import { DialogConditionComponent } from '../dialog-condition';
import { RolesAddService } from './roles-add.service';
import * as moment from 'moment';
@Component({
  selector: 'app-roles-add',
  templateUrl: './roles-add.component.html',
  styleUrls: ['./roles-add.component.scss'],
  providers: [RolesAddService]
})
export class RolesAddComponent implements OnInit {

  isVisible = false;
  role = '0';
  sex = 'F';
  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
    console.log(this.role);
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }


  constructor() { }
  ngOnInit() {
    this.showModal();
  }

}
