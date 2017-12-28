import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Userr} from '../../models/user';
import {Router} from '@angular/router';
import {ProfileService} from '../../services/profile.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserFormComponent implements OnInit {

  private user: Userr;
  
  constructor(private _userService: ProfileService, private _router: Router) { }

  ngOnInit() {
    this.user = this._userService.getter();
  }

 processForm() {
    if (this.user.id === undefined) {
     this._userService.createUser(this.user).subscribe((user) => {
       console.log(user);
       this._router.navigate(['/']);
     },
     (error) => {
     console.log(error);
      });
    }else {
     this._userService.updateUser(this.user).subscribe((user) => {
       console.log(user);
       this._router.navigate(['/']);
     },
     (error) => {
     console.log(error);
   });
    }
 }

}



