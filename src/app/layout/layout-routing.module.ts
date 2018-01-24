import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LayoutComponent} from './layout.component';
import {IndexComponent} from './index/index.component';
import {PatientsComponent} from './patients/patients.component';

  const homeRoutes: Routes = [
    {
      path: '', component: LayoutComponent,
      children: [
        // { path: '', redirectTo: '/', pathMatch: 'full' }
        {path: '', component: IndexComponent},
        { path: 'person', component: PatientsComponent}
      ]
    }];


@NgModule({
  imports: [
    RouterModule.forChild(
      homeRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {

}
