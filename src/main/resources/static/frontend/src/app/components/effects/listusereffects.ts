 import * as listuseractions from '../actions/listuseractions';
 import {User} from '../../models/user.interface';
import {ProfileService} from '../../services/profile.service';

import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Action, Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';


export type Action = listuseractions.Actions;

@Injectable()
export class ListuserEffects {

  constructor(private actions$: Actions, private postSvc: ProfileService) {}

  @Effect()
  GetUsers$: Observable<Action> = this.actions$.ofType(listuseractions.GET_USERS)
    .switchMap(() => this.postSvc.getUsers())
   .map(users => new listuseractions.GetUsersSuccess(users))
        .catch((err) => of(new listuseractions.GetUsersFail({error: err.message})));
}