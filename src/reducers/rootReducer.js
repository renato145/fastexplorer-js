import { combineReducers } from '@reduxjs/toolkit';
import { socketReducer } from './socketReducer';

export const rootReducer = combineReducers({ socket: socketReducer });