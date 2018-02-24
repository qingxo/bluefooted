import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import storage from '../../shared/storage';
@Injectable()
export class RolesPrivilegesService extends BaseService {

  constructor(
    public http: HttpClient) {
    super(http);
  }

  getList(data) {
    return this.postInfo('api/v1/cust/getCustomerByParams', storage.serialize(data));
  }

  saveRole(data, uid) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'no-change': 'true'
      })
    };
    return this.http.post(`api/mm/tree/updatefunctionByRoleId/${uid}`, data, httpOptions);
  }
}
