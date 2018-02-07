import { Component, OnInit, Output, EventEmitter, ComponentFactoryResolver, ViewContainerRef, ViewChild, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { RolesAddService } from './roles-add.service';
import * as moment from 'moment';
import { RolesPrivilegesComponent } from '../roles-privileges/roles-privileges.component';
@Component({
  selector: 'app-roles-add',
  templateUrl: './roles-add.component.html',
  styleUrls: ['./roles-add.component.scss'],
  providers: [RolesAddService]
})
export class RolesAddComponent implements OnInit {

  isVisible = false;
  validateForm: FormGroup;
  modalTitle: String = '新增角色';
  roleInfo: any;
  isEdit: Boolean = false;
  @Output() fired = new EventEmitter<any>();
  constructor(private fb: FormBuilder, public rolesAddService: RolesAddService) { }
  ngOnInit() {
    this.showModal();
    const roleInfo = this.isEdit ? this.roleInfo : {};
    this.validateForm = this.fb.group({
      role_no: [roleInfo['role_no'], [Validators.required]],
      role_name: [roleInfo['role_name'], [Validators.required]],
      comment: [roleInfo['comment'], [Validators.required]]
    });
  }

  initMoreInfo(roleInfo) {
    // 是否是编辑状态
    if (roleInfo) {
      this.isEdit = true;
      this.roleInfo = roleInfo;
      this.modalTitle = '编辑-' + roleInfo.role_name;
    }
  }

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.fired.emit({
      roleInfo: this.validateForm.value,
      isEdit: this.isEdit
    });
    this.isVisible = false;
  }

  handleCancel = (e) => {
    this.isVisible = false;
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
