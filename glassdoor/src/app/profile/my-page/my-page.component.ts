import { Component, OnInit, Input } from '@angular/core';

import { User } 		from '../shared/user.model';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
	@Input() username: string;

  constructor() { }

  ngOnInit() {
  	// Initialize user object with the information received from the login service
  }

}
