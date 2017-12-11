import {Action} from '@ngrx/store';

// import {User} from '../../models/user';

export const GET_USERS = '[Get] Users';
export const GET_USERS_SUCCESS = '[Get] Users Success';
export const GET_USERS_FAILED = '[Get] Users Failed';


export class GetUsers implements Action {
    readonly type = GET_USERS;

    constructor() {}
}

export class GetUsersSuccess implements Action {
    readonly type = GET_USERS_SUCCESS;

    constructor(public payload: any) {}  // User[] instead of any
}

export class GetUsersFailed implements Action {
    readonly type = GET_USERS_FAILED;

    constructor(public payload: any) {}
}

export type All = 
| GetUsers
| GetUsersSuccess
| GetUsersFailed;

