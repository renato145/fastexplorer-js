import React, { useState, useRef, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import { useFrame } from 'react-three-fiber';
import { DoubleSide } from 'three';
import { ResizeObserver } from '@juggle/resize-observer';
import { connect } from 'react-redux';
import { send_event } from '../sagas/socketSaga';
import { serverEvents } from '../constants/serverEvents';
import { CanvasContainer } from './CanvasContainer';
import { Button } from '../components/Button';
import { Col } from 'react-bootstrap';
import { OrbitControls } from 'drei';
import { urlToArray } from '../helpers/numpyReader';

const mapDispatch = { send_event };

const mapStateToProps = (state) => ({
  dataUrl: state.socket.lossLandscape,
});

const Mesh = ({ dataUrl }) => {
  const meshRef = useRef();
  const planeRef = useRef();

  useEffect(() => {
    if (!dataUrl) return;
    const plane = planeRef.current;
    urlToArray(dataUrl).then(({ data, shape }) => {
      data.forEach((o,i) => {
        plane.vertices[i].z = o/10000;
      });
      plane.verticesNeedUpdate = true;
    });
  }, [dataUrl]);

  const shaderData = useMemo(() => {
    const vertexShader = /* glsl */`
  varying float z;

  void main() {
    vec3 pos = position;
    // pos.z = min(pos.z, 2.0);
    z = pos.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

    const fragmentShader = /* glsl */`
  varying float z;
  
  void main() {
    vec4 col = vec4(z, 0.1, 0.3, 1.0);
    col.a = smoothstep(1.0, 0.0, clamp(z, 0.0, 1.2));
    col.a = smoothstep(0.0, 1.0, clamp(z, 0.0, 1.2));
    gl_FragColor = col;
  }
`;

    return { vertexShader, fragmentShader };
  }, []);

  useFrame(() => (meshRef.current.rotation.z += 0.005));

  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2.1} position-y={-1.5}>
      <planeGeometry ref={planeRef} attach="geometry" args={[5, 5, 100, 100]} />
      <shaderMaterial attach="material" {...shaderData} side={DoubleSide}  />
      {/* <meshLambertMaterial
        attach="material"
        color='hotpink'
        side={DoubleSide}
        // wireframe
      /> */}
      <OrbitControls />
    </mesh>
  );
};

export const LossLandscapeComponent = ({ dataUrl, send_event }) => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  return (
    <Col>
      <CanvasContainer measure={ref}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Mesh bounds={bounds} dataUrl={dataUrl} />
      </CanvasContainer>
      <div className="text-right mt-2 mr-2">
        <Button
          onClick={() => send_event({ event: serverEvents.GET_LOSS_LANDSCAPE })}
        >
          Load landscape
        </Button>
      </div>
    </Col>
  );
};

export const LossLandscape = connect(
  mapStateToProps,
  mapDispatch
)(LossLandscapeComponent);
