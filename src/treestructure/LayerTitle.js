import React from 'react';
import { connect } from 'react-redux';
import { send_event } from '../sagas/socketSaga';
import { serverEvents } from '../constants/serverEvents';

const mapDispatch = { send_event };

const LayerTitleComponent = ({ name, shape, path, send_event }) => {
  return (
    <span
      className="tw-align-middle tw-cursor-pointer"
      onClick={() =>
        send_event({ event: serverEvents.GET_HEATMAP, path: path })
      }
    >
      {name}
      {shape ? ` [${shape.toString()}]` : ''}
    </span>
  );
};

export const LayerTitle = connect(null, mapDispatch)(LayerTitleComponent);
