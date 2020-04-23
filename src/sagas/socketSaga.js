import { eventChannel, END } from 'redux-saga';
import {
  all,
  call,
  take,
  put,
  takeLatest,
  fork,
} from 'redux-saga/effects';
import { socketConnected, socketClosed } from '../reducers/socketReducer';
import { createAction } from '@reduxjs/toolkit';
import { npyToUrl } from '../helpers/numpyReader';

const uri = 'ws://localhost:8000/ws';

export const send_event = createAction('socket/sendEvent', (payload) => ({
  payload: { event: payload },
}));

function initWebSocket(socket) {
  return eventChannel((emit) => {
    socket.onopen = () => {
      emit(socketConnected());
      console.log('WebSocket connected.');
      socket.send(
        JSON.stringify({ type: 'CONNECTED', payload: { client: 'web_client' } })
      );
    };

    socket.onmessage = async (event) => {
      const data = event.data;
      const msg = typeof data === "string" ? JSON.parse(data) : await npyToUrl(data);
      if (!msg.type) console.error('Invalid message from socket server', msg);
      else {
        console.log('Event from WebSocket: ', msg.type);
        emit(msg);
      }
    };

    socket.onclose = () => {
      console.log('WebSocket closed.');
      emit(socketClosed());
      emit(END);
    };

    socket.onerror = (err) => {
      emit(new Error(err.reason));
    };

    return () => socket.close();
  });
}

function* sendEvent(socket, action) {
  yield socket.send(JSON.stringify(action));
}

function* watchClient(socket) {
  yield all([takeLatest(send_event, sendEvent, socket)]);
}

function* watchServer(socketChannel) {
  while (true) {
    try {
      const payload = yield take(socketChannel);
      yield put(payload);
    } catch (err) {
      console.error(err);
    }
  }
}

export function* watchSocket() {
  const socket = yield new WebSocket(uri);
  const socketChannel = yield call(initWebSocket, socket);
  yield fork(watchClient, socket);
  yield fork(watchServer, socketChannel);
}
