// import * as listuseractions from '../actions/listuseractions';
// import {User} from '../../models/user';
/*import {ProfileService} from '../../services/profile.service';

import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Action, Store} from '@ngrx/store';
// import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {PayloadAction, GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL, GetUsersSuccess, GetUsersFail, GetUsers} from '../actions/listuseractions';
import {ObservableInput} from 'rxjs/Observable';

//export type Action = listuseractions.Actions;

@Injectable()
export class ListuserEffects {

  constructor(private actions$: Actions, private postSvc: ProfileService) {}

  @Effect()
  GetUsers$: Observable<Action> = this.actions$.ofType(GET_USERS)
    // .map((action: ListUserActions.GetUsers) => action.payload)
    .switchMap((action: Action): ObservableInput<Action> => {
        return this.postSvc.getUsers()
        .switchMap((data) => {
            return Observable.from([...data.map(GetUsers), GetUsersSuccess()]);
        })
        .catch((err) => {
            return of(GetUsersFail());
        })
       /* this.postSvc.getUsers())
    .map(users => new listuseractions.GetUsersSuccess(users))
    .catch(err => of(new listuseractions.GetUsersFail({error: err.message})));
   // .switchMap(action => this.userService.getUsers())
   // .delay(2000)
   // .map((acion: ListUserActions.GetUsersSuccess) => acion.payload
   // );
});
}*/