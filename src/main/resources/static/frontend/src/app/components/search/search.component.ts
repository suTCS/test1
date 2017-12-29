import { Component, OnInit, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import {User} from '../../models/user.interface';
import {Userr} from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/operator/debounceTime';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  users: Observable<Userr[]>;
  //private user: Userr;
  private lastName = new Subject<string>();

  constructor(private _userService: ProfileService) { }

  ngOnInit() {
   // this.lastName = "";
    //this.users = this._userService.getter();

    /*this.users = this.lastName
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
      ? this._userService.findByLastName(term)
    : Observable.of<User[]>([]))
    .catch(error => {
      console.log(error);
      return Observable.of<User[]>([]);
    })*/
  }

  search(term: string): void {
    this.lastName.next(term);
  }

/*
  private searchCustomers() {
    this._userService.findByLastName(this.lastName).subscribe(() => 
      this.users = users)
   
  }
  // this.dataService.getCustomersByLastName(this.lastName).then(customers => this.customers = customers);
  onSubmit() {
    this.searchCustomers();
  }*/
}
