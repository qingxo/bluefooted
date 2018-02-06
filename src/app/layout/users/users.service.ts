import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
import storage from '../../shared/storage';
@Injectable()
export class UsersService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getList(data) {
    return this.postInfo('api/v1/cust/getCustomerByParams', storage.serialize(data));
  }
  addUser(data) {
    return this.postInfo('api/v1/cust/getCustomerByParams', storage.serialize(data));
  }
  editUser(data) {
    return this.postInfo('api/v1/cust/getCustomerByParams', storage.serialize(data));
  }
}
