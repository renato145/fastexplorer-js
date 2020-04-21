import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { socketConnected } from '../reducers/socketReducer';

const mapDispatch = { socketConnected };

const useComponent = ({ uri, socketConnected }) => {
  const [data, setData] = useState();
  const socket = useMemo(() => {
    const socket = new WebSocket(uri);

    socket.onopen = () => {
      console.log('socket connected.');
      // socketConnected()
      socket.send(JSON.stringify({ client: 'web_client' }));
    };

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      switch (msg.event) {
        case 'representation_data':
          setData(JSON.parse(msg.msg));
          break;
        case 'close':
          // closeMessage = ` (${msg.msg}).`;
          break;
        case 'invalid_event':
          console.log(`Event not accepted by server: ${msg.msg}.`)
          break;
        default:
          console.log(`Invalid event: ${msg.event}.`);
      }
    };

    socket.onclose = () => {
      console.log('socket closed.');
      // setStatus('disconnected');
    };

    socket.onerror = (error) => {
      console.log('WebSocket error ' + error);
      console.dir(error);
    }

    return socket;
  }, [uri]);

  return { data, socket };
};

// export const useSocket = connect(null, mapDispatch)(useComponent);
export const useSocket = useComponent;
