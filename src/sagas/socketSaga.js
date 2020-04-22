import { eventChannel, END } from 'redux-saga';
import {
  all,
  call,
  take,
  put,
  takeLatest,
  fork,
} from 'redux-saga/effects';
import {
  socketConnected,
  socketClosed,
} from '../reducers/socketReducer';
import { createAction } from '@reduxjs/toolkit';

const uri = 'ws://localhost:8000/ws';

export const send_event = createAction('socket/sendEvent');

function initWebSocket(socket) {
  return eventChannel((emit) => {
    socket.onopen = () => {
      emit(socketConnected());
      console.log('WebSocket connected.');
      socket.send(JSON.stringify({type:'CONNECTED' , payload: {client: 'web_client' }}));
    };

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (!msg.type) console.error('Invalid message from socket server', msg)
      else emit(msg);
      // console.log(msg.event)
      // switch (msg.event) {
      //   case 'close':
      //     // closeMessage = ` (${msg.msg}).`;
      //     break;
      //   case 'invalid_event':
      //     console.log(`Event not accepted by server: ${msg.msg}.`);
      //     break;
      //   default:
      //     console.log(`Invalid event: ${msg.event}.`);
      // }
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
  // console.log(JSON.stringify(action))
  yield socket.send(JSON.stringify(action));
}

function* watchClient(socket) {
  yield all([
    takeLatest(send_event, sendEvent, socket),
  ]);
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
  const socket = new WebSocket(uri);
  const socketChannel = yield call(initWebSocket, socket);
  yield fork(watchClient, socket);
  yield fork(watchServer, socketChannel);
}
