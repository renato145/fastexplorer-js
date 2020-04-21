import { eventChannel, END } from 'redux-saga';
import { call, take, put } from 'redux-saga/effects';
import { socketConnected, socketClosed, socketReceiveData } from '../reducers/socketReducer';

const uri = 'ws://localhost:8000/ws';

function initWebSocket() {
  return eventChannel((emit) => {
    const socket = new WebSocket(uri);

    socket.onopen = () => {
      emit({type: socketConnected.type});
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
      emit({type: socketClosed.type});
      emit(END);
      // setStatus('disconnected');
    };

    socket.onerror = (err) => {
      emit(new Error(err.reason));
    };

    return () => socket.close();
  });
}

export function* watchSocket() {
  const socketChannel = yield call(initWebSocket);

  while (true) {
    try {
      const payload = yield take(socketChannel);
      yield put(payload);
    } catch (err) {
      console.error(err);
    }
  }
}
