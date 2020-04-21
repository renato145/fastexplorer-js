import { all, put, takeLatest, delay } from 'redux-saga/effects';

function* testSaga({value}) {
  yield delay(500);
  yield put({type: 'TEST_SAGA_ASYNC', value });
}

function* watchTestSaga() {
  yield takeLatest('TEST_SAGA', testSaga);
}

export function* rootSaga() {
  yield all([
    watchTestSaga(),
  ]);
}
