import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  addRoles(userId, roleId) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'no-change': 'true'
    //   })
    // };
    // return this.http.post(`api/mm/tree/roleTree/${userId}`, data, httpOptions);
    return this.postInfo(`api/mm/user/allocationRole/${userId}/${roleId}`, storage.serialize({}));
  }
  // 设置角色
  // setRole(data) {
  //   return this.postInfo('api/mm/roleTree/' + data.userId, storage.serialize({}));
  // }
}
