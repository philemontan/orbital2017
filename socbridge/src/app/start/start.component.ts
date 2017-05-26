import { Component, OnInit } from '@angular/core';
import {UsersService} from '../Users/users.service';
import {User} from '../Basic Models/User.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  loggedIn = false;
  Users: User[];
  signUpNow = false;
  constructor(private users: UsersService) {
    this.Users = users.getUsers();
  }

  ngOnInit() {
  }
  login() {
    this.loggedIn = true;
    this.signUpNow = false;
  }

  signUp() {
    this.signUpNow = true;
    this.loggedIn = false;
  }

}
