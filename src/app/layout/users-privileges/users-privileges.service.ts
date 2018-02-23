import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
import storage from '../../shared/storage';
@Injectable()
export class UsersPrivilegesService extends BaseService {

  constructor(
    public http: HttpClient) {
    super(http);
  }

  getPrivileges(userId) {
    return this.postInfo('api/mm/tree/roleTree/' + userId, storage.serialize({}));
  }
  updatePrivileges(userId, data) {
    return this.postInfo('api/mm/tree/roleTree/' + userId, storage.serialize(data));
  }
  // 设置角色
  // setRole(data) {
  //   return this.postInfo('api/mm/roleTree/' + data.userId, storage.serialize({}));
  // }
}
