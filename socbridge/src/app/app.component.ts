import { Component } from '@angular/core';
import {UsersService} from './Users/users.service';
import {User} from './Basic Models/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user1: User = new User('Siddharth', 'Madhavan', 'x', 'CEG', 1, ['cs1010', 'cs1231', 'Ma1505']);
  user2: User = new User('Philemon', 'Tan', 'x', 'CEG', 2, ['cs1010', 'cs1231', 'Ma1505', 'Ma1506']);
  constructor(private usersService: UsersService) {
    this.usersService.addUser(this.user1);
    this.usersService.addUser(this.user2);

  }

}
