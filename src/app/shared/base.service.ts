import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import storage from './storage';
import 'sweetalert';
@Injectable()
export class BaseService {
  public LOG_OUT = '10000000'; // 登录错误
  public SYS_ERROR = '10000001'; // 系统操作错误
  constructor(public http: HttpClient) { }

  getInfo(url: any): Observable<any> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);

  }

  postInfo(url, data): Observable<any> {
    return this.http.post(url, data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: any) {
    // const body = res.json();
    const body = res;
    if (!body.success) {
      if (body.errCode === '10000000') {
        setTimeout(() => {
          storage.remove('state');
          window.location.href = '/login';
        }, 2000);
      } else if (body.errCode === '10000001') {
        swal('错误', 'error', body.errMsg);
      }

    }
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      console.log(body);
      // const err = body.error || JSON.stringify(body);
      const err = 'error';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    swal('网络请求出错啦~', errMsg, 'error', { timer: 2000 });
    return Observable.throw(errMsg);
  }
}
