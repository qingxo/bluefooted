import { Component, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [PatientsService]
})
export class PatientsComponent implements OnInit {
  public pInfo: object = {};
  testData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }
  ];
  constructor(public patientsService: PatientsService) { }

  ngOnInit() {
    this.initData();
  }
  initData() {
    this.patientsService.getList().subscribe((res) => {
      this.pInfo = res;
    }
    );
  }


}
