import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { send_event } from '../sagas/socketSaga';
import { serverEvents } from '../constants/serverEvents';

const mapDispatch = { send_event };

const Title = styled('span')`
  vertical-align: middle;
  cursor: zoom-in;
`;

const LayerTitleComponent = ({ name, shape, path, send_event }) => {
  return (
    <Title
      onClick={() =>
        send_event({ event: serverEvents.GET_HEATMAP, path: path })
      }
    >
      {name}
      {shape ? ` [${shape.toString()}]` : ''}
    </Title>
  );
};

export const LayerTitle = connect(null, mapDispatch)(LayerTitleComponent);
