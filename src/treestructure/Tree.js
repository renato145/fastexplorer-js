import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { useSpring, a } from 'react-spring';
import { usePrevious, useDimensions } from './utils';
import { MinusSquareO, PlusSquareO, CloseSquareO } from './icons';
import { LayerTitle } from './LayerTitle';

const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
`;

const Content = styled(a.div)`
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 2px dashed rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
};

export const Tree = memo(({ data, level, parentPath }) => {
  const { name, nodes } = data;
  const shape = data?.xtra?.shape;
  const pathname = data?.xtra?.path;
  const path = parentPath ? `${parentPath}/${pathname}` : pathname;
  const [isOpen, setOpen] = useState(data?.xtra?.open);
  const previous = usePrevious(isOpen);
  const { ref, height: viewHeight } = useDimensions();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });
  const Icon = nodes ? (isOpen ? MinusSquareO : PlusSquareO) : CloseSquareO;

  return (
    <Frame>
      <Icon
        className="inline-block"
        style={{ ...toggle, opacity: nodes ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <LayerTitle name={name} shape={shape} path={path} />
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}
      >
        <a.div
          ref={ref}
          style={{ transform }}
          children={
            nodes &&
            nodes.map((node, i) => (
              <Tree key={i} data={node} level={level + 1} parentPath={path} />
            ))
          }
        />
      </Content>
    </Frame>
  );
});
