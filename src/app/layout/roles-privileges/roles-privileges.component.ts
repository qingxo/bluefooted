import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
// import { DialogConditionComponent } from '../dialog-condition';
import { RolesPrivilegesService } from './roles-privileges.service';
@Component({
  selector: 'app-roles-privileges',
  templateUrl: './roles-privileges.component.html',
  styleUrls: ['./roles-privileges.component.scss'],
  providers: [RolesPrivilegesService],
  encapsulation: ViewEncapsulation.None
})
export class RolesPrivilegesComponent implements OnInit {


  constructor(private rolesPrivilegesService: RolesPrivilegesService) { }
  isVisible = false;
  modalTitle: String = '';
  showModal = () => {
    //console.log();
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
    //console.log(this.role);
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }
  ngOnInit() {
    this.showModal();
  }
  initMoreInfo(roleInfo) {
    this.modalTitle = roleInfo;
  }
  changeGrand(grand) {
    const checked = grand.checked;
    grand.children.forEach((item, index) => {
      item.checked = checked;
      item.children.forEach((subItem, index) => {
        subItem.checked = checked;
      })
    })

    grand.checked = true;
    grand.children.forEach((item, index) => {
      if (!item.checked) {
        grand.checked = false;
      }
    })
  }
  changeChildren(grand, parent) {
    parent.checked = true;
    parent.children.forEach((item, index) => {
      if (!item.checked) {
        parent.checked = false;
      }
    })

    grand.checked = true;
    grand.children.forEach((item, index) => {
      if (!item.checked) {
        grand.checked = false;
      }
    })
  }
  changeParent(grand, parent) {
    grand.checked = true;
    grand.children.forEach((item, index) => {
      if (!item.checked) {
        grand.checked = false;
      }
    })

    console.log(parent.checked)
    parent.children.forEach((item, index) => {
      item.checked = parent.checked;
    })

  }
  // allChecked = false;
  // indeterminate = true;
  menus = { "data": [{ "id": "1", "dataId": 1, "text": "平台管理", "url": "", "state": null, "checked": true, "parentId": 0, "nodeNumer": "10", "attributes": { "id": 1, "type": "0" }, "children": [{ "id": "2", "dataId": 2, "text": "客户管理", "url": "home.client", "state": null, "checked": true, "parentId": 1, "nodeNumer": "1001", "attributes": { "id": 2, "type": "0" }, "children": [{ "id": "btn_119", "dataId": 119, "text": "新增客户", "url": null, "state": null, "checked": true, "parentId": 2, "nodeNumer": "100101", "attributes": { "id": 119, "type": "1" }, "children": null }, { "id": "btn_120", "dataId": 120, "text": "编辑客户", "url": null, "state": null, "checked": true, "parentId": 2, "nodeNumer": "100102", "attributes": { "id": 120, "type": "1" }, "children": null }, { "id": "btn_121", "dataId": 121, "text": "删除客户", "url": null, "state": null, "checked": true, "parentId": 2, "nodeNumer": "100103", "attributes": { "id": 121, "type": "1" }, "children": null }, { "id": "btn_122", "dataId": 122, "text": "客户详情", "url": null, "state": null, "checked": true, "parentId": 2, "nodeNumer": "100104", "attributes": { "id": 122, "type": "1" }, "children": null }, { "id": "btn_123", "dataId": 123, "text": "安排专员", "url": null, "state": null, "checked": true, "parentId": 2, "nodeNumer": "100105", "attributes": { "id": 123, "type": "1" }, "children": null }, { "id": "btn_124", "dataId": 124, "text": "绑定设备", "url": null, "state": null, "checked": true, "parentId": 2, "nodeNumer": "100106", "attributes": { "id": 124, "type": "1" }, "children": null }, { "id": "btn_125", "dataId": 125, "text": "订购服务包", "url": null, "state": null, "checked": true, "parentId": 2, "nodeNumer": "100107", "attributes": { "id": 125, "type": "1" }, "children": null }] }, { "id": "3", "dataId": 3, "text": "服务包管理", "url": "home.servicepackage", "state": null, "checked": true, "parentId": 1, "nodeNumer": "1002", "attributes": { "id": 3, "type": "0" }, "children": [{ "id": "btn_126", "dataId": 126, "text": "新增服务包", "url": null, "state": null, "checked": true, "parentId": 3, "nodeNumer": "100201", "attributes": { "id": 126, "type": "1" }, "children": null }, { "id": "btn_127", "dataId": 127, "text": "编辑服务包", "url": null, "state": null, "checked": true, "parentId": 3, "nodeNumer": "100202", "attributes": { "id": 127, "type": "1" }, "children": null }, { "id": "btn_128", "dataId": 128, "text": "上/下架", "url": null, "state": null, "checked": true, "parentId": 3, "nodeNumer": "100203", "attributes": { "id": 128, "type": "1" }, "children": null }, { "id": "btn_129", "dataId": 129, "text": "服务包详情", "url": null, "state": null, "checked": true, "parentId": 3, "nodeNumer": "100204", "attributes": { "id": 129, "type": "1" }, "children": null }, { "id": "btn_190", "dataId": 190, "text": "查看服务包", "url": null, "state": null, "checked": true, "parentId": 3, "nodeNumer": "100204", "attributes": { "id": 190, "type": "1" }, "children": null }] }, { "id": "22", "dataId": 22, "text": "机构管理", "url": "home.organizationManagement", "state": null, "checked": true, "parentId": 1, "nodeNumer": "1006", "attributes": { "id": 22, "type": "0" }, "children": [] }, { "id": "4", "dataId": 4, "text": "订单管理", "url": "home.order", "state": null, "checked": true, "parentId": 1, "nodeNumer": "1003", "attributes": { "id": 4, "type": "0" }, "children": [{ "id": "btn_130", "dataId": 130, "text": "启动/停止", "url": null, "state": null, "checked": true, "parentId": 4, "nodeNumer": "100301", "attributes": { "id": 130, "type": "1" }, "children": null }, { "id": "btn_131", "dataId": 131, "text": "退订", "url": null, "state": null, "checked": true, "parentId": 4, "nodeNumer": "100302", "attributes": { "id": 131, "type": "1" }, "children": null }, { "id": "btn_132", "dataId": 132, "text": "详情", "url": null, "state": null, "checked": true, "parentId": 4, "nodeNumer": "100303", "attributes": { "id": 132, "type": "1" }, "children": null }] }, { "id": "6", "dataId": 6, "text": "健康服务专员管理", "url": "home.health", "state": null, "checked": true, "parentId": 1, "nodeNumer": "1005", "attributes": { "id": 6, "type": "0" }, "children": [{ "id": "btn_136", "dataId": 136, "text": "新增", "url": null, "state": null, "checked": true, "parentId": 6, "nodeNumer": "100501", "attributes": { "id": 136, "type": "1" }, "children": null }, { "id": "btn_137", "dataId": 137, "text": "编辑", "url": null, "state": null, "checked": true, "parentId": 6, "nodeNumer": "100502", "attributes": { "id": 137, "type": "1" }, "children": null }, { "id": "btn_138", "dataId": 138, "text": "删除", "url": null, "state": null, "checked": true, "parentId": 6, "nodeNumer": "100503", "attributes": { "id": 138, "type": "1" }, "children": null }, { "id": "btn_139", "dataId": 139, "text": "设为默认专员", "url": null, "state": null, "checked": true, "parentId": 6, "nodeNumer": "100504", "attributes": { "id": 139, "type": "1" }, "children": null }] }] }, { "id": "7", "dataId": 7, "text": "健康管理", "url": "", "state": null, "checked": true, "parentId": 0, "nodeNumer": "11", "attributes": { "id": 7, "type": "0" }, "children": [{ "id": "8", "dataId": 8, "text": "我的任务", "url": "home.mytask", "state": null, "checked": true, "parentId": 7, "nodeNumer": "1101", "attributes": { "id": 8, "type": "0" }, "children": [{ "id": "btn_140", "dataId": 140, "text": "处理", "url": null, "state": null, "checked": true, "parentId": 8, "nodeNumer": "110101", "attributes": { "id": 140, "type": "1" }, "children": null }, { "id": "btn_141", "dataId": 141, "text": "完成", "url": null, "state": null, "checked": true, "parentId": 8, "nodeNumer": "110102", "attributes": { "id": 141, "type": "1" }, "children": null }, { "id": "btn_142", "dataId": 142, "text": "查看", "url": null, "state": null, "checked": true, "parentId": 8, "nodeNumer": "110103", "attributes": { "id": 142, "type": "1" }, "children": null }] }, { "id": "9", "dataId": 9, "text": "异常提醒", "url": "home.errortips", "state": null, "checked": true, "parentId": 7, "nodeNumer": "1102", "attributes": { "id": 9, "type": "0" }, "children": [{ "id": "btn_143", "dataId": 143, "text": "处理", "url": null, "state": null, "checked": true, "parentId": 9, "nodeNumer": "110201", "attributes": { "id": 143, "type": "1" }, "children": null }] }, { "id": "19", "dataId": 19, "text": "体征管理", "url": "home.body", "state": null, "checked": true, "parentId": 7, "nodeNumer": "1104", "attributes": { "id": 19, "type": "0" }, "children": [{ "id": "btn_187", "dataId": 187, "text": "体征异常临界值", "url": null, "state": null, "checked": true, "parentId": 19, "nodeNumer": "110401", "attributes": { "id": 187, "type": "1" }, "children": null }, { "id": "btn_188", "dataId": 188, "text": "监测数据", "url": null, "state": null, "checked": true, "parentId": 19, "nodeNumer": "110402", "attributes": { "id": 188, "type": "1" }, "children": null }, { "id": "btn_189", "dataId": 189, "text": "健康报告", "url": null, "state": null, "checked": true, "parentId": 19, "nodeNumer": "110403", "attributes": { "id": 189, "type": "1" }, "children": null }] }, { "id": "17", "dataId": 17, "text": "睡眠管理", "url": "home.sleepdata", "state": null, "checked": true, "parentId": 7, "nodeNumer": "1103", "attributes": { "id": 17, "type": "0" }, "children": [{ "id": "btn_184", "dataId": 184, "text": "绑定设备", "url": null, "state": null, "checked": true, "parentId": 17, "nodeNumer": "110301", "attributes": { "id": 184, "type": "1" }, "children": null }, { "id": "btn_185", "dataId": 185, "text": "睡眠监测", "url": null, "state": null, "checked": true, "parentId": 17, "nodeNumer": "110302", "attributes": { "id": 185, "type": "1" }, "children": null }, { "id": "btn_186", "dataId": 186, "text": "365睡眠评估", "url": null, "state": null, "checked": true, "parentId": 17, "nodeNumer": "110303", "attributes": { "id": 186, "type": "1" }, "children": null }] }] }, { "id": "20", "dataId": 20, "text": "统计报表", "url": "", "state": null, "checked": true, "parentId": 0, "nodeNumer": "13", "attributes": { "id": 20, "type": "0" }, "children": [{ "id": "21", "dataId": 21, "text": "统计报表", "url": "home.statistics", "state": null, "checked": true, "parentId": 20, "nodeNumer": "1301", "attributes": { "id": 21, "type": "0" }, "children": [] }, { "id": "25", "dataId": 25, "text": "多体征卡绑定数据", "url": "home.cardData", "state": null, "checked": true, "parentId": 20, "nodeNumer": "1303", "attributes": { "id": 25, "type": "0" }, "children": [] }] }, { "id": "10", "dataId": 10, "text": "设置", "url": "", "state": null, "checked": true, "parentId": 0, "nodeNumer": "12", "attributes": { "id": 10, "type": "0" }, "children": [{ "id": "16", "dataId": 16, "text": "账号管理", "url": "home.accounts", "state": null, "checked": true, "parentId": 10, "nodeNumer": "1205", "attributes": { "id": 16, "type": "0" }, "children": [{ "id": "btn_181", "dataId": 181, "text": "新增账号", "url": null, "state": null, "checked": true, "parentId": 16, "nodeNumer": "120501", "attributes": { "id": 181, "type": "1" }, "children": null }, { "id": "btn_182", "dataId": 182, "text": "编辑账号", "url": null, "state": null, "checked": true, "parentId": 16, "nodeNumer": "120502", "attributes": { "id": 182, "type": "1" }, "children": null }, { "id": "btn_183", "dataId": 183, "text": "删除账号", "url": null, "state": null, "checked": true, "parentId": 16, "nodeNumer": "120503", "attributes": { "id": 183, "type": "1" }, "children": null }] }, { "id": "11", "dataId": 11, "text": "机构设置", "url": "home.groupmanage", "state": null, "checked": true, "parentId": 10, "nodeNumer": "1201", "attributes": { "id": 11, "type": "0" }, "children": [] }, { "id": "12", "dataId": 12, "text": "权限管理", "url": "home.jurisdiction", "state": null, "checked": true, "parentId": 10, "nodeNumer": "1202", "attributes": { "id": 12, "type": "0" }, "children": [] }, { "id": "14", "dataId": 14, "text": "意见反馈", "url": "home.feedback", "state": null, "checked": true, "parentId": 10, "nodeNumer": "1203", "attributes": { "id": 14, "type": "0" }, "children": [] }, { "id": "15", "dataId": 15, "text": "同步数据", "url": "home.syndata", "state": null, "checked": true, "parentId": 10, "nodeNumer": "1204", "attributes": { "id": 15, "type": "0" }, "children": [] }] }], "success": true };

  // updateAllChecked() {
  //   this.indeterminate = false;
  //   if (this.allChecked) {
  //     this.checkOptionsOne.forEach(item => item.checked = true);
  //   } else {
  //     this.checkOptionsOne.forEach(item => item.checked = false);
  //   }
  // }

  // updateSingleChecked() {
  //   if (this.checkOptionsOne.every(item => item.checked === false)) {
  //     this.allChecked = false;
  //     this.indeterminate = false;
  //   } else if (this.checkOptionsOne.every(item => item.checked === true)) {
  //     this.allChecked = true;
  //     this.indeterminate = false;
  //   } else {
  //     this.indeterminate = true;
  //   }
  // }

}
