import { Component, OnInit } from '@angular/core';

import { LoginComponent }			from './login/login.component';
import { MyPageComponent }		from './my-page/my-page.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	isLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
  	this.isLoggedIn = false; // todo: get this from session(local storage)
  }

}
