import { Component, OnInit, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import {User} from '../../models/user.interface';
import {Userr} from '../../models/user';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  users: Userr[];
  //private user: Userr;
  lastName: string;

  constructor(private _userService: ProfileService) { }

  ngOnInit() {
    this.lastName = "";
    //this.users = this._userService.getter();
  }

  private searchCustomers() {
    this._userService.findByLastName(this.lastName).subscribe(() => 
      this.users = users)
   
  }
  // this.dataService.getCustomersByLastName(this.lastName).then(customers => this.customers = customers);
  onSubmit() {
    this.searchCustomers();
  }
}
