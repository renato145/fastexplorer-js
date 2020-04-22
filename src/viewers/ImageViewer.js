import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { send_event } from '../sagas/socketSaga';
import { serverEvents } from '../constants/serverEvents';

const mapDispatch = { send_event };

export const ImageViewerComponent = ({ inputImage, send_event }) => {
  return (
    <div>
      <p>Input image: {inputImage}</p>
      <Button onClick={() => send_event(serverEvents.LOAD_INPUT)}>Load Input</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  inputImage: state.socket.inputImage,
});

export const ImageViewer = connect(mapStateToProps, mapDispatch)(ImageViewerComponent);
