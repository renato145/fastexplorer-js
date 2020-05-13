import React from 'react';
import { Tree } from './Tree';

export const TreeLayout = ({ data }) => {
  return <Tree data={data} level={0} parentPath="" />;
};
