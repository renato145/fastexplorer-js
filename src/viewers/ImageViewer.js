import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { send_event } from '../sagas/socketSaga';
import { serverEvents } from '../constants/serverEvents';

const mapDispatch = { send_event };

export const ImageViewerComponent = ({ send_event }) => {
  return (
    <div>
      <Button onClick={() => send_event(serverEvents.LOAD.INPUT)}>Load Input</Button>
    </div>
  );
};

export const ImageViewer = connect(null, mapDispatch)(ImageViewerComponent);
