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
  	this.profileService.onLogin(username, password)
  	.then(res => {
  		localStorage.setItem('session', JSON.stringify(res.json()));
  	})
  	.catch(this.handleError);
  }

  onRegister(username: string, password: string): void {
  	this.profileService.onRegister(username, password)
  	.then(res => {
  		console.log("res from register: ", res);
  	});
  }
}
