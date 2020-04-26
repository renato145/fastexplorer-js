import React from 'react';
import { connect } from 'react-redux';
import { NpyImage } from './NpyImage';

const mapStateToProps = (state) => ({
  heatmap: state.socket.heatmap,
});

export const HeatmapComponent = ({ heatmap }) => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <p className="text-center">
        Heatmap
      </p>
      <NpyImage url={heatmap} />
    </div>
  );
};

export const Heatmap = connect(
  mapStateToProps,
  null
)(HeatmapComponent);
