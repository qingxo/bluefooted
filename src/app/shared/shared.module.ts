import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HeadLineComponent } from './head-line/head-line.component';
import { TabsComponent } from './tabs/tabs.component';
import { PagesComponent } from './pages/pages.component';
import { PipeBirthPipe } from './pipes/pipe-birth.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [HeadLineComponent, TabsComponent, PagesComponent, PipeBirthPipe],
  exports: [HeadLineComponent, TabsComponent, PagesComponent, PipeBirthPipe]
})
export class SharedModule { }
