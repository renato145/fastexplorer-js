import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';

export const ImageViewer = ({socket}) => {
  const loadInput = useCallback(() => {
    socket.send(JSON.stringify({event: 'load_input'}));
  }, [socket]);

  return (
    <div>
      <Button onClick={loadInput}>Load Input</Button>
    </div>
  );
};