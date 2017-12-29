import { Component, ViewEncapsulation, OnInit, Inject, ViewChild, Pipe, PipeTransform } from '@angular/core';
import {User} from '../../models/user.interface';
import {Router} from '@angular/router';
import {ProfileService} from '../../services/profile.service';
import {Userr} from '../../models/user';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as listUserActions from '../actions/listuseractions';
import * as fromRoot from '../../big-reducer'
import {AppState} from '../reducers/listuserreducer';
//import {listuserReducer} from '../reducers/listuserreducer';
//import 'rxjs/Rx';
//import {IList} from '../interface/list';
//import {IStore} from '../interface/store';

import {Address} from '../../models/address';

import {MatDialog, MatSnackBar, MatPaginator} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component'
import { DataSource } from '@angular/cdk/table';




@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListuserComponent implements OnInit{

  answer: string  ='';
  answerDisplay: string='';
  showSpinner: boolean = false;

  showAnswer() {
    this.showSpinner = true;
    
    setTimeout(() => { //delay
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000)
  }
  //
  address = new Address();
  
  onSubmit() {
    alert("Thanks" + JSON.stringify(this.address));
  }
  
  //
  dialogResult ="";

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: 'This text is passed into the dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`dialog ${result}`);
      this.dialogResult = result;
    })
  }
//
openSnackBar() {
  this.snackBar.open("PizzaPartyComponent snakcbar message", "got it");
}
  //
  showFiller = false;
//

 //dataSource = new UserDataSource(this._userService);
 displayedColumns = ['id', 'fname', 'lname', "delete", "edit"];
//MatPaginator = new UserDataSource(this._userService);

 //@ViewChild(MatPaginator) paginator: MatPaginator;

 /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   
  ngAfterViewInit() {
    this.dataSource = this.paginator;
}*/

panelOpenState: boolean = false;


//

recentchanges = [
  {
    name: 'Article-title',
    updated: new Date('1/1/16'),
    icon: 'folder',
    author: 'a'
  },
  {
    name: 'Article-title',
    updated: new Date('1/17/16'),
    icon: 'label',
    author: 'b'
  },
  {
    name: 'Article-title',
    updated: new Date('1/28/16'),
    icon: 'loyalty',
    author: 'c'
  },
  {
    name: 'Article-title',
    updated: new Date('1/28/15'),
    icon: 'lightbulb_outline',
    author: 'd'
  }
];

//
  // private users: User[];
//
users$: Observable<User[]>;
loading$: Observable<boolean>;



constructor(private _userService: ProfileService, private _router: Router, public dialog: MatDialog, public snackBar: MatSnackBar, private store: Store<AppState>) {
  this.loading$  = this.store.select(fromRoot.getUsersLoading);
  this.users$ = this.store.select(fromRoot.getUserEntities)
}
  
ngOnInit() {
    /*this._userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    },
      (error) => {
      console.log(error);
    },
    () => {
      console.log('success');
    });
    */
    this.store.dispatch(new listUserActions.GetUsers());
  }

  deleteUser(user) {
    this._userService.deleteUser(user.id).subscribe((users) => {
      //this.users.splice(this.users.indexOf(user), 1)
      //this._userService.getUsers();  //array starts 0
      location.reload();
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
    const user = new Userr();
    this._userService.setter(user);
    this._router.navigate(['/op']);
  }

}


export class UserDataSource extends DataSource<any> {
  constructor(private _userService: ProfileService) {
    super();
  }

  connect(): Observable<User[]> {
    
      return this._userService.getUsers();
      
  }
  disconnect() {}
}

//return this._userService.dataChanged.switchMap(() => this._userService.getAllUsers()



