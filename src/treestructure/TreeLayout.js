import React, { useCallback } from 'react';
import { Tree } from './Tree';
import { MinusSquareO, PlusSquareO } from './icons';

const toggle = {
  width: '1.3em',
  height: '1.3em',
  marginTop: 10,
  marginRight: 7,
  cursor: 'pointer',
  verticalAlign: 'middle',
};

export const TreeLayout = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Tree data={data} level={0} />
      {/* <div>
        <MinusSquareO style={{ ...toggle }} onClick={() => {}} />
        <PlusSquareO style={{ ...toggle }} onClick={() => {}} />
      </div> */}
    </div>
  );
};
