import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { get_input } from '../sagas/socketSaga';

const mapDispatch = { get_input };

export const ImageViewerComponent = ({ get_input }) => {
  return (
    <div>
      <Button onClick={() => get_input()}>Load Input</Button>
    </div>
  );
};

export const ImageViewer = connect(null, mapDispatch)(ImageViewerComponent)
