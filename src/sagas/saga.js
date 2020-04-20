import { all, put, takeLatest, delay } from 'redux-saga/effects';

function* testSaga() {
  yield delay(1000);
  yield put({type: 'TEST_SAGA'});
}

function* watchTestSaga() {
  yield takeLatest('TEST_SAGA_ASYNC', testSaga);
}

export function* rootSaga() {
  yield all([
    watchTestSaga(),
  ]);
}
