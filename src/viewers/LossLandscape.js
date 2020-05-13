import React, { useState, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';
import { CanvasContainer } from './CanvasContainer';
import { Button } from '../components/Button';
import { Col } from 'react-bootstrap';
import { useFrame } from 'react-three-fiber';
import { OrbitControls } from 'drei';

const Mesh = () => {
  const ref = useRef();
  const [hovered, setHover] = useState(false);

  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  return (
    <mesh
      ref={ref}
      scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'orange'}
      />
      <OrbitControls />
    </mesh>
  );
};

export const LossLandscape = () => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  return (
    <Col>
      <CanvasContainer measure={ref}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Mesh bounds={bounds} />
      </CanvasContainer>
      <div className="text-right mt-2 mr-2">
        <Button>Load landscape</Button>
      </div>
    </Col>
  );
};
