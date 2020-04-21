import { all, fork } from 'redux-saga/effects';
import { watchSocket } from './socketSaga';

export function* rootSaga() {
  yield fork(watchSocket)
  yield all([
  ]);
}
