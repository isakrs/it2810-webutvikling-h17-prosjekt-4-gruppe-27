import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
	isLoggedIn: boolean;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  	const session = JSON.parse(localStorage.getItem('session'));
    this.checkSession(session);
  }

  private checkSession(session: any): void {
		if (session === null) {
			this.isLoggedIn = false;
		} else {
			this.profileService.isTokenValid(session.token)
			.then(isLoggedIn => this.isLoggedIn = isLoggedIn);
		}
	}

  clicked(): void {
  	this.profileService.onLogOut();
  }

}
