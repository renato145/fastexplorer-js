import { combineReducers } from '@reduxjs/toolkit';
import { socket } from './socket';

export const rootReducer = combineReducers({ socket });