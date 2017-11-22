import { Component, OnInit } from '@angular/core';

import { LoginComponent }			from './login/login.component';
import { MyPageComponent }		from './my-page/my-page.component';
import { User }								from './shared/user.model';
import { ProfileService } 		from './shared/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	isLoggedIn: boolean;
	username: string;
	token: string;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
  	const session = JSON.parse(localStorage.getItem('session'));
    this.checkSession(session);
  }

	checkSession(session: any): void {
		if (session === null || session.auth === false) {
			this.isLoggedIn = false;
		} else {
			this.profileService.isTokenValid(session.token)
			.then(isLoggedIn => this.isLoggedIn = isLoggedIn);
			this.username = session.username;
			this.token = session.token;
		}
	}
}
