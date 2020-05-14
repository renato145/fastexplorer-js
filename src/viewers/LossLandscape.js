import React, { useRef, useEffect, useMemo } from 'react';
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
  data: state.socket.lossLandscape,
});

const Mesh = ({ data }) => {
  const meshRef = useRef();
  const planeRef = useRef();

  const shaderData = useMemo(() => {
    const vertexShader = /* glsl */ `
  varying vec3 pos;

  void main() {
    pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

    const fragmentShader = /* glsl */ `
  varying vec3 pos;

  void main() {
    vec4 col = vec4(0.0, 0.1, 0.3, 1.0);
    col.r = max(0.0, (1.0 - pos.z/2.0)) * (1.0 - distance(pos.xy, vec2(0.0))/10.0);
    gl_FragColor = col;
  }
`;

    const uniforms = {
      // u_maxz: { value: 1 },
    };

    return { vertexShader, fragmentShader, uniforms };
  }, []);

  useEffect(() => {
    if (!data) return;
    const plane = planeRef.current;
    const max_z = data.max_z ?? 1;
    urlToArray(data).then(({ data, shape }) => {
      data.forEach((o, i) => {
        plane.vertices[i].z = o / max_z;
      });
      plane.verticesNeedUpdate = true;
    });
    // shaderData.uniforms.u_maxz.value = max_z;
  }, [data, shaderData]);

  // useFrame(() => (meshRef.current.rotation.z += 0.005));

  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2.1} position-y={-1.5}>
      <planeGeometry ref={planeRef} attach="geometry" args={[5, 5, 100, 100]} />
      <shaderMaterial
        attach="material"
        {...shaderData}
        side={DoubleSide}
        // wireframe
      />
      {/* <meshNormalMaterial
        attach="material"
        // {...shaderData}
        side={DoubleSide}
        // wireframe
      /> */}
      <OrbitControls />
    </mesh>
  );
};

export const LossLandscapeComponent = ({ data, send_event }) => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  return (
    <Col>
      <CanvasContainer measure={ref}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Mesh bounds={bounds} data={data} />
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
