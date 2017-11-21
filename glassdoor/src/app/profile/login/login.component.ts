import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
  }

  onLogin(username: string, password: string): void {
  	const res = this.profileService.onLogin(username, password);
  	console.log("res from login: ", res);
  }

  onRegister(username: string, password: string): void {
  	const res = this.profileService.onRegister(username, password);
  	console.log("res from register: ", res);
  }
}
