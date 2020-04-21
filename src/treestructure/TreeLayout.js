import React from 'react';
import { Tree } from './Tree';

export const TreeLayout = ({ data }) => {
  console.log(data);

  return <Tree data={data} level={0} />;
};
