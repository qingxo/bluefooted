import { Component, OnInit, Output, EventEmitter, ComponentFactoryResolver, ViewContainerRef, ViewChild, Input } from '@angular/core';
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
  userInfo: any;
  isEdit: Boolean = false;
  @Output() fired = new EventEmitter<any>();
  showModal = () => {
    //console.log();
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.fired.emit({
      userInfo: this.validateForm.value,
      isEdit: this.isEdit
    });
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
    const userInfo = this.isEdit ? this.userInfo : {};
    this.validateForm = this.fb.group({
      name: [userInfo['name'], [Validators.required]],
      loginname: [userInfo['loginname'], [Validators.required]],
      loginpwd: [userInfo['loginpwd'], [Validators.required]],
      comment: [userInfo['comment'], [Validators.required]]
    });
  }

  initMoreInfo(userInfo) {
    if (userInfo) {
      this.isEdit = true;
      this.userInfo = userInfo;
      this.modalTitle = '编辑-' + userInfo.loginname;
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
