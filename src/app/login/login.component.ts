import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  user = new User('', '', true);

  ngOnInit() {
  }


  loginConfirm() {
    this.router.navigate(['/']);
  }

}
