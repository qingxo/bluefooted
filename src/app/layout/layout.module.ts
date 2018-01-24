import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { IndexComponent } from './index/index.component';
import { PatientsComponent } from './patients/patients.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgZorroAntdModule,
    SharedModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, IndexComponent, PatientsComponent]
})
export class LayoutModule { }
