import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HeadLineComponent } from './head-line/head-line.component';
import { TabsComponent } from './tabs/tabs.component';
import { PipeBirthPipe } from './pipes/pipe-birth.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [HeadLineComponent, TabsComponent, PipeBirthPipe],
  exports: [HeadLineComponent, TabsComponent, PipeBirthPipe]
})
export class SharedModule { }
