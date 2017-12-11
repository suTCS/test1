import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as listuseractions from '../actions/listuseractions';
import {User} from '../../models/user';
import {ProfileService} from '../../services/profile.service';

export type Action = listuseractions.All;

@Injectable()
export class Listusereffects {
    constructor(private actions$: Actions, private postSvc: ProfileService) {}

    @Effect()
    loadAllUsers: Observable<Action> = this.actions$.ofType(listuseractions.GET_USERS)
        .switchMap(() => this.postSvc.getUsers())
        .map((userlists: any) => listuseractions.GET_USERS_SUCCESS(userlists) 
    );
        

}


