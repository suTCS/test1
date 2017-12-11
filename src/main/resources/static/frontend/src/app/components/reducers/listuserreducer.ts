import {User} from '../../models/user';
import * as listuseractions from '../actions/listuseractions';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export type Action = listuseractions.All;

export interface AppState {
    listusers: User[]
}

export function Listuserreducer(state: User[] = [], action: Action) {
    switch(action.type) {
        case listuseractions.GET_USERS:
            return [...state];

        case listuseractions.GET_USERS_SUCCESS:
            return [...state, ...action.payload];

        case listuseractions.GET_USERS_FAILED:
            return [...state, action.payload];

        default:
            return state;
    }
}