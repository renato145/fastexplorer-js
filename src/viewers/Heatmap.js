import React from 'react';
import { connect } from 'react-redux';
import { NpyImage } from './NpyImage';

const mapStateToProps = (state) => ({
  heatmap: state.socket.heatmap,
});

export const HeatmapComponent = ({ heatmap }) => {
  return <NpyImage url={heatmap} title="Heatmap" />;
};

export const Heatmap = connect(mapStateToProps, null)(HeatmapComponent);
