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
  constructor(public patientsService: PatientsService) { }

  ngOnInit() {
    this.initData();
  }
  initData() {
    this.patientsService.getList().subscribe((res) => {
      this.pInfo = res;
    });
  }


}
