import { combineReducers } from 'redux';
import { socket } from './socket';

export const rootReducer = combineReducers({ socket });