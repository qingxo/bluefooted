import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
import storage from '../../shared/storage';
import { RolesAddComponent } from '../roles-add/roles-add.component';
@Injectable()
export class RolesService extends BaseService {

  constructor(
    public http: HttpClient) {
    super(http);
  }

  getList(data) {
    return this.postInfo('api/v1/cust/getCustomerByParams', storage.serialize(data));
  }
  addRole(data) {
    return this.postInfo('api/v1/cust/getCustomerByParams', storage.serialize(data));
  }
  editRole(data) {
    return this.postInfo('api/v1/cust/getCustomerByParams', storage.serialize(data));
  }
}
