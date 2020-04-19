import React from 'react';
import { hierarchy } from 'd3';

export const TreeLayout = ({data}) => {
  const root = hierarchy(data);
  console.log(root);

  return (
    <p>test</p>
  );
}