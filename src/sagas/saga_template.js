// import { createAction } from '@reduxjs/toolkit';
// import { put, takeLatest, delay } from 'redux-saga/effects';
// import { test_rtx, prepareSocket } from '../reducers/socket';

// export const test_saga = createAction('TEST_SAGA', prepareSocket);

// function* testSaga({ payload }) {
//   yield delay(500);
//   yield put({type: test_rtx.type, payload });
// }

// export function* watchTestSaga() {
//   yield takeLatest(test_saga, testSaga);
// }
