/*import {User} from '../../models/user.interface';
// import * as listuseractions from '../actions/listuseractions';
import {PayloadAction, GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL, REQ_ADD_ITEM, POST_USER, POST_USER_SUCCESS, POST_USER_FAIL} from '../actions/listuseractions';
import {append, assocPath} from 'ramda';
import {Action} from '@ngrx/store';
import {IList} from '../interface/list';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

// export type Action = listuseractions.Actions;

const storeInitialState: IList = {
    items: [],
    addReqSent: null,
    getReqSent: false,
    lastAddReqFailed: false,
    lastGetReqFailed: false
}


/*export interface AppState {
  users: User[];
}

export function listuserReducer(state: IList = storeInitialState, action: PayloadAction): IList {
  
    if(action.type === GET_USERS) {
        return assocPath(
            ['getReqSent'],
            true,
            state
        );
    }
    
    if(action.type === GET_USERS_SUCCESS) {
        return assocPath(
            ['getReqSent'],
            false,
            assocPath(
                ['lastGetReqFailed'],
                false,
                state
            )
        );
    }

    if(action.type === GET_USERS_FAIL) {
        return assocPath(
            ['getReqSent'],
            false,
            assocPath(
                ['lastGetReqFailed'],
                true,
                state
            )
        );
    }

    if(action.type === REQ_ADD_ITEM) {
        return assocPath(['addReqSent'], action.payload, state);
    }

    if(action.type === POST_USER) {
        return assocPath(['items'], append(action.payload, state.items), state);
    }

    if(action.type === POST_USER_SUCCESS) {
        return assocPath(['addReqSent'], null, assocPath(['lastAddReqFailed'], false, state));
    }

    if(action.type === POST_USER_FAIL) {
        return assocPath(
			['addReqSent'],
			null,
			assocPath(
				['lastAddReqFailed'], 
				true,
				state
			)
		);

    }
    return state;
}*/