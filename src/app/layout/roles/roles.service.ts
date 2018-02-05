import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
import storage from '../../shared/storage';
import { RolesAddComponent } from '../roles-add/roles-add.component';
@Injectable()
export class RolesService extends BaseService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    public http: HttpClient) {
    super(http);
  }

  getList(data) {
    return this.postInfo('api/v1/cust/getCustomerByParams', storage.serialize(data));
  }
  showModal() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(RolesAddComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <RolesAddComponent>containerRef.createComponent(componentFatory).instance;
  }
}
