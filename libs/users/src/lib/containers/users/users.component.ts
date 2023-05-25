import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";


@Component({
  selector: 'course-project-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  constructor(private usersService: UserService) {}

  public getAllUsers(): void {
    this.usersService.getAllUsers().subscribe(users => {
      console.log(users);
    })
  }
}
