import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { send_event } from '../sagas/socketSaga';
import { serverEvents } from '../constants/serverEvents';
import { NpyImage } from './NpyImage';

const mapDispatch = { send_event };

const mapStateToProps = (state) => ({
  inputImage: state.socket.inputImage,
});

export const ImageInputComponent = ({ inputImage, send_event }) => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <p className="text-center">
        Input image
      </p>
      <NpyImage url={inputImage} />
      <p className="text-right">
        <Button
          variant="link"
          onClick={() => send_event({ event: serverEvents.LOAD_INPUT })}
        >
          Load Input
        </Button>
      </p>
    </div>
  );
};

export const ImageInput = connect(
  mapStateToProps,
  mapDispatch
)(ImageInputComponent);
