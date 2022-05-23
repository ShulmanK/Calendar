import { combineReducers } from 'redux';
import {userReducer} from './reducers/user/userReducer';


export type RootState = ReturnType<typeof rootReducer>;