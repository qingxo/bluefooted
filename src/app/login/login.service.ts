import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { HttpClient } from '@angular/common/http';
import storage from '../shared/storage';
@Injectable()
export class LoginService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  login(data) {
    return this.postInfo('api/mm/user/listByPage', storage.serialize(data));
  }
  getMenuList(roleId) {
    return this.postInfo('api/mm/tree/AclTree/' + roleId, storage.serialize({}));
  }
}
