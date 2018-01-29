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
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    SharedModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, IndexComponent, PatientsComponent, PatientsSearchComponent]
})
export class LayoutModule { }
