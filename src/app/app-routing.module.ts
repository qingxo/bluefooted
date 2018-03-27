import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login';
import { MobileMeetingComponent } from './mobile-meeting';
import { VideoTalkComponent } from './video-talk/video-talk.component';
const appRoutes: Routes = [
  { path: '', loadChildren: 'app/layout/layout.module#LayoutModule' },
  { path: 'login', component: LoginComponent },
  { path: 'mobile', component: MobileMeetingComponent },
  { path: 'videotalk', component: VideoTalkComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
        //  preloadingStrategy: PreloadAllModules
      } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
