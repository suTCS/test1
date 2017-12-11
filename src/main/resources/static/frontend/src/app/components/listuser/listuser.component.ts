import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {ProfileService} from '../../services/profile.service';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListuserComponent implements OnInit {

  private users: User[];

  constructor(private _userService: ProfileService, private _router: Router) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    },
      (error) => {
      console.log(error);
    },
    () => {
      console.log('success');
    });
  }

  deleteUser(user) {
    this._userService.deleteUser(user.id).subscribe((users) => {
      this.users.splice(this.users.indexOf(user), 1);  //array starts 0
    },
    (error) => {
    console.log(error);
    },
    () => {
      console.log('success');
    });
}
//?
  updateUser(user) {
    this._userService.setter(user);
    this._router.navigate(['/op']);
  }

  newUser() {
    const user = new User();
    this._userService.setter(user);
    this._router.navigate(['/op']);
  }

}
