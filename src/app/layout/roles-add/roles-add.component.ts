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
import tools from '../../shared/tools';
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
  role_no: any;
  role_name: any;
  comment: any;
  appId: any;
  isEdit: Boolean = false;
  @Output() fired = new EventEmitter<any>();
  constructor(private fb: FormBuilder, public rolesAddService: RolesAddService) { }
  ngOnInit() {
    this.showModal();
    const roleInfo = this.isEdit ? this.roleInfo : {};
    this.validateForm = this.fb.group({
      role_no: [roleInfo['roleId'], [Validators.required]],
      role_name: [roleInfo['roleName'], [Validators.required]],
      comment: [roleInfo['note'], [Validators.required]]
    });
  }

  initMoreInfo(roleInfo) {
    // 是否是编辑状态
    if (roleInfo) {
      this.isEdit = true;
      this.roleInfo = roleInfo;
      this.role_name = this.roleInfo['roleName'];
      this.role_no = this.roleInfo['roleId'];
      this.comment = this.roleInfo['note'];
      this.modalTitle = '编辑-' + roleInfo['roleName'];
    }
  }

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    const data = {
      roleId: this.role_no,
      roleName: this.role_name,
      note: this.comment,
      appId: 'MM'
    };
    if (this.isEdit) {
      this.rolesAddService.editRole(data).subscribe((res) => {
        if (res['success']) {
          tools.tips('成功');
          this.isVisible = false;
        } else {
          tools.tips('失败', '', 'error');
        }
      });
    } else {
      this.rolesAddService.addRole(data).subscribe((res) => {
        if (res['success']) {
          tools.tips('成功');
          this.isVisible = false;
        } else {
          tools.tips('失败', '', 'error');
        }
      });
    }

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
