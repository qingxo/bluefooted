import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { IndexComponent } from './index/index.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsSearchComponent } from './patients-search/patients-search.component';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersPrivilegesComponent } from './users-privileges/users-privileges.component';
import { RolesComponent } from './roles/roles.component';
import { RolesAddComponent } from './roles-add/roles-add.component';
import { RolesPrivilegesComponent } from './roles-privileges/roles-privileges.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    SharedModule,
    LayoutRoutingModule
  ],
  entryComponents: [
    RolesAddComponent,
    RolesPrivilegesComponent,
    UsersAddComponent,
    UsersPrivilegesComponent
  ],
  declarations: [
    LayoutComponent,
    IndexComponent,
    PatientsComponent,
    PatientsSearchComponent,
    UsersComponent,
    UsersAddComponent,
    UsersPrivilegesComponent,
    RolesComponent,
    RolesAddComponent,
    RolesPrivilegesComponent
  ]
})
export class LayoutModule { }
