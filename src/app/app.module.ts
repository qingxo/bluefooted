import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BaseHttpInterceptor } from './shared/base.http.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BaseHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
