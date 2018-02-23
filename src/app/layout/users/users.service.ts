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
    return this.postInfo('api/mm/user/listByPage', storage.serialize(data));
  }
  addUser(data) {
    return this.postInfo('api/mm/user/add', storage.serialize(data));
  }
  editUser(data) {
    return this.postInfo('api/mm/user/modify', storage.serialize(data));
  }
  deleteUser(userId) {
    return this.deleteInfo('api/mm/user/delete/' + userId);
  }
}
