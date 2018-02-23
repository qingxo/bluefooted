// import * as $ from 'jquery';
import storage from './storage';
// import SysData from './sysData';
import 'sweetalert';
class Tools {
  private aCity: object = {
    11: '北京', 12: '天津', 13: '河北', 14: '山西',
    15: '内蒙古', 21: '辽宁', 22: '吉林',
    23: '黑龙江', 31: '上海', 32: '江苏',
    33: '浙江', 34: '安徽', 35: '福建',
    36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南',
    44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川',
    52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃',
    63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港',
    82: '澳门', 91: '国外'
  };

  private TIMER = 2000;

  // initBtnShow(topLevel, secondLevel, btnKey) {
  //   if (!storage.get('menu')) {
  //     return {};
  //   }
  //   const menu = eval(storage.get('menu'));
  //   let jurisdiction = [], myBtn: any;
  //   for (let i = 0; i < menu.length; i++) {
  //     if (menu[i].text === SysData['level_top_array'][topLevel]) {
  //       const child = menu[i].children;
  //       for (let j = 0; j < child.length; j++) {
  //         if (child[j].text === SysData['level_sec_array'][topLevel][secondLevel]) {
  //           jurisdiction = child[j].children;
  //         }
  //       }
  //     }
  //   }

  //   const backTarget = {};
  //   myBtn = SysData[btnKey];
  //   for (let i = 0; i < jurisdiction.length; i++) {
  //     backTarget[jurisdiction[i].text] = jurisdiction[i].checked;
  //   }

  //   for (const key of myBtn) {
  //     if (backTarget[key['key']] === undefined) {
  //       backTarget[key['key']] = false;
  //     }
  //   }

  //   for (const key in backTarget) {
  //     backTarget[key] = !backTarget[key];
  //   }

  //   return backTarget;
  // }

  // 身份证校验
  isCardID(sId) {
    let iSum = 0;
    const info = '';
    if (!/^\d{17}(\d|x)$/i.test(sId)) {
      return '你输入的身份证长度或格式错误';
    }
    sId = sId.replace(/x$/i, 'a');
    if (this.aCity[parseInt(sId.substr(0, 2), 10)] == null) {
      return '你的身份证地区非法';
    }
    const sBirthday = sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2));
    const d = new Date(sBirthday.replace(/-/g, '/'));
    if (sBirthday !== (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate())) {
      return '身份证上的出生日期非法';
    }
    for (let i = 17; i >= 0; i--) {
      iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
    }
    if (iSum % 11 !== 1) {
      return '你输入的身份证号非法';
    }
    return true;
  }

  // loading(flag) {
  //   const html = `<div class="loading">
  //    <img src="/assets/images/loading.jpg">
  //  </div>`;
  //   if (flag) {
  //     $('.smart-container').append(html);
  //   } else {
  //     $('.loading').remove();
  //   }
  // }

  tips(msgTitle: string, msgDetail: string = '', msgType: any = 'success', timer: number = this.TIMER) {
    // setTimeout(() => {
    //   swal({
    //     title: msgTitle,
    //     text: msgDetail,
    //     type: msgType,
    //     timer: timer,
    //     showConfirmButton: false,
    //     showCancelButton: true,
    //     cancelButtonText: '确定'
    //   });
    // }, 50);
    setTimeout(() => {
      swal({
        title: msgTitle,
        text: msgDetail,
        icon: msgType,
        buttons: {
          confirm: {
            text: "确定",
            value: true,
            visible: true,
            className: "",
            closeModal: true,
          }
        }
      });
    }, 50);

  }


  tipsConfirm(msgTitle: string, msgText: string, callback) {
    swal({
      title: msgTitle,
      text: msgText,
      icon: 'warning',
      buttons: {
        cancel: {
          text: "取消",
          value: null,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "确定",
          value: true,
          visible: true,
          className: "",
          closeModal: true
        }
      }
    }).then(isConfirm => {
      if (isConfirm) {
        callback && callback();
      }
    });
  }

  // 手机号码的正确检查
  checkMobile(phoneNum) {
    const reg = /^1[3|4|5|7|8][0-9]{9}$/; // 验证规则
    const flag = reg.test(phoneNum); // true
    return flag;
  }


  // 能输入数字和小数点的判断
  numberFixed(target: any) {
    const newH = target.replace(/[^\d\.]*/g, '');
    if (String(newH).split('.').length > 2) {
      target = target.substr(0, target.length - 1);
    }
    if (String(newH).substr(-1, 1) !== '.') {
      const tmp = String(parseFloat(newH).toFixed(1));
      const p = parseFloat(tmp);
      target = p;
    }
    return target;

  }


}

export default new Tools();
