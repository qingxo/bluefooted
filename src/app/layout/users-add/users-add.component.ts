import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
// import { DialogConditionComponent } from '../dialog-condition';
import { UsersAddService } from './users-add.service';
import * as moment from 'moment';
import { RolesPrivilegesComponent } from '../roles-privileges/roles-privileges.component';
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss'],
  providers: [UsersAddService]
})
export class UsersAddComponent implements OnInit {

  isVisible = false;
  validateForm: FormGroup;
  modalTitle: String = '新增用户';
  roleInfo: any;
  editFlag: Boolean = false;
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


  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.showModal();
    const role_no = this.editFlag ? this.roleInfo['role_no'] : null,
      role_name = this.editFlag ? this.roleInfo['role_name'] : null;
    this.validateForm = this.fb.group({
      role_no: [role_no, [Validators.required]],
      role_name: [role_name, [Validators.required]]
    });
  }

  initMoreInfo(roleInfo) {
    this.editFlag = roleInfo ? true : false;
    if (roleInfo) {
      this.roleInfo = roleInfo;
      this.modalTitle = '编辑-' + roleInfo.role_name;
    }
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
  }
}
