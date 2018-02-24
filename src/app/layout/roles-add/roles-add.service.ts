import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
import storage from '../../shared/storage';
@Injectable()
export class RolesAddService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  addRole(data) {
    return this.postInfo('api/mm/role/addRole', storage.serialize(data));
  }
  editRole(data) {
    return this.postInfo('api/mm/role/modifyRole', storage.serialize(data));
  }

}
