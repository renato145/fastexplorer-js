import { useMemo, useState } from 'react';

// TODO:
// Reconnect socket
// Use redux to manage data

export const useSocket = ({ uri }) => {
  const [data, setData] = useState();
  const socket = useMemo(() => {
    const socket = new WebSocket(uri);

    socket.onopen = () => {
      console.log('socket connected.');
      socket.send(JSON.stringify({ client: 'web_client' }));
    };

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      console.log(`socket server event: ${msg.event}`);
      switch (msg.event) {
        case 'representation_data':
          setData(JSON.parse(msg.msg));
          break;
        case 'close':
          // closeMessage = ` (${msg.msg}).`;
          break;
        default:
          console.log(`Invalid event: ${msg.event}.`);
      }
    };

    socket.onclose = () => {
      console.log('socket closed.');
    };

    return socket;
  }, [uri]);

  return { data, socket };
};
