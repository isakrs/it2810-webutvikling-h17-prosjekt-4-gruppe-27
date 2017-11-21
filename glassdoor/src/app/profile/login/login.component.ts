import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin(username: string, password: string): void {
  	// Do login
  }

  onRegister(username: string, password: string): void {
  	// Do regisger
  }

}
