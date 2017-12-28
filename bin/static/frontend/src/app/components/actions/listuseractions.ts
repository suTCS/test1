/*import {Action} from '@ngrx/store';
// import {User} from '../../models/user';
export interface PayloadAction extends Action {payload: string};

export const GET_USERS = '[Gett] Users';
export const GET_USERS_SUCCESS = '[Gett] Users success';
export const GET_USERS_FAIL = '[Get] users fail';

export const DELETE_USER = 'Delete user';
export const DELETE_USER_SUCCESS = 'Delete user success';
export const DELETE_USER_FAIL = 'Delete user fail';

export const EDIT_USER = 'Edit User';
export const EDIT_USER_SUCCESS = 'Edit user success';
export const EDIT_USER_FAIL = 'Edit user fail';

export const REQ_ADD_ITEM: string = "Req post user";
export const POST_USER = 'Post User';
export const POST_USER_SUCCESS = 'Post user success';
export const POST_USER_FAIL = 'Post user fail';

export const GetUsers = (): Action => {
  return { type: GET_USERS};
};

export const GetUsersSuccess = (): Action => {
    return {type: GET_USERS_SUCCESS};
};

export const GetUsersFail = (): Action => {
    return { type: GET_USERS_FAIL};
};

export const ReqPostUser = (data: string): PayloadAction => {
	return {
		type: REQ_ADD_ITEM,
		payload: data
	};
};

export const PostUser = (data: string): PayloadAction => {
	return {
		type: POST_USER,
		payload: data
	};
};

export const PostUserSuccess = (): Action => {
	return {
		type: POST_USER_SUCCESS
	};
};

export const PostUserFail = (): Action => {
	return {
		type: POST_USER_FAIL
	};
};
/*export class GetUsersSuccess implements Action  {
  readonly type = GET_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class GetUsersFail implements Action  {
  readonly type = GET_USERS_FAIL;
  constructor(public payload: any) {}
}


export class DeleteUser implements Action {
  readonly type = DELETE_USER;
  constructor(public payload: any) {}
}

export class DeleteUserSuccess implements Action  {
  readonly type = DELETE_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteUserFail implements Action  {
  readonly type = DELETE_USER_FAIL;
  constructor(public payload: any) {}
}


export class EditUser implements Action {
  readonly type = EDIT_USER;
  constructor(public payload: any) {}
}

export class EditUserSuccess implements Action  {
  readonly type = EDIT_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class EditUserFail implements Action  {
  readonly type = EDIT_USER_FAIL;
  constructor(public payload: any) {}
}


export class PostUser implements Action {
  readonly type = POST_USER;
  constructor(public payload: any) {}
}

export class PostUserSuccess implements Action  {
  readonly type = POST_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class PostUserFail implements Action  {
  readonly type = POST_USER_FAIL;
  constructor(public payload: any) {}
}

export type Actions
= GetUsers
| GetUsersSuccess
| GetUsersFail
| DeleteUser
| DeleteUserSuccess
| DeleteUserFail
| EditUser
| EditUserSuccess
| EditUserFail
| PostUser
| PostUserSuccess
| PostUserFail;*/

// export type Actions = GetUsers;  this one doesn't work