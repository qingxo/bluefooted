import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PatientsService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getList() {
    return this.getInfo('api/plist');
  }

}
