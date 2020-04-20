import { useMemo, useState } from 'react';

// TODO:
// Reconnect socket
// Use redux to manage data

export const useSocket = ({ uri }) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState('waiting');
  const socket = useMemo(() => {
    const socket = new WebSocket(uri);

    socket.onopen = () => {
      console.log('socket connected.');
      setStatus('connected')
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
      setStatus('disconnected');
    };

    return socket;
  }, [uri]);

  return { data, socket, status };
};
