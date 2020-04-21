import { all } from 'redux-saga/effects';
import { watchTestSaga } from './testSaga';

export function* rootSaga() {
  yield all([
    watchTestSaga(),
  ]);
}
