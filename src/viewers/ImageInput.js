import React from 'react';
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
    <>
      <NpyImage url={inputImage} title="Input image" />
      <div className="text-right mt-1 mr-1">
        <button
          className="text-sm"
          onClick={() => send_event({ event: serverEvents.LOAD_INPUT })}
        >
          Load Input
        </button>
      </div>
    </>
  );
};

export const ImageInput = connect(
  mapStateToProps,
  mapDispatch
)(ImageInputComponent);
