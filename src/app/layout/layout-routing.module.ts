import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { IndexComponent } from './index/index.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsSearchComponent } from './patients-search/patients-search.component';

const homeRoutes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'person', component: PatientsComponent },
      { path: 'search', component: PatientsSearchComponent }
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
