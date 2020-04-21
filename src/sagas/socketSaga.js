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
  socketReceiveData,
} from '../reducers/socketReducer';
import { createAction } from '@reduxjs/toolkit';

const uri = 'ws://localhost:8000/ws';

export const get_input = createAction('GET_INPUT');

function initWebSocket(socket) {
  return eventChannel((emit) => {
    socket.onopen = () => {
      emit({ type: socketConnected.type });
      console.log('WebSocket connected.');
      socket.send(JSON.stringify({ client: 'web_client' }));
    };

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      switch (msg.event) {
        case 'representation_data':
          console.log('data received');
          emit({
            type: socketReceiveData.type,
            payload: { data: JSON.parse(msg.msg) },
          });
          break;
        case 'close':
          // closeMessage = ` (${msg.msg}).`;
          break;
        case 'invalid_event':
          console.log(`Event not accepted by server: ${msg.msg}.`);
          break;
        default:
          console.log(`Invalid event: ${msg.event}.`);
      }
    };

    socket.onclose = () => {
      console.log('WebSocket closed.');
      emit({ type: socketClosed.type });
      emit(END);
      // setStatus('disconnected');
    };

    socket.onerror = (err) => {
      emit(new Error(err.reason));
    };

    return () => socket.close();
  });
}

function* getInput(socket) {
  yield socket.send(JSON.stringify({event: 'load_input'}));
}

function* watchClient(socket) {
  yield all([takeLatest(get_input, getInput, socket)]);
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
