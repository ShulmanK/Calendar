import {IUser} from "../../../models/IUser";

export type AuthState = {
    isAuth: boolean,
    isLoading: boolean,
    user: IUser
}

export enum AuthActionTypes {
    LOGIN_USER_INIT = 'LOGIN_USER_INIT',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
    LOGOUT_USER_INIT = 'LOGOUT_USER_INIT',
    LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
    LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR',
}