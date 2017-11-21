import { Component, OnInit } from '@angular/core';

import { User } 		from '../shared/user.model';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
	user: User;

  constructor() { }

  ngOnInit() {
  	// Initialize user object with the information received from the login service
  }

}
