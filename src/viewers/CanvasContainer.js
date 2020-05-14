import React from "react";
import styled from "styled-components";
import { Canvas } from "react-three-fiber";

const Container = styled.div`
  height: 75vh;
  min-height: 300px;
  width: 100%;
  background-color: #000;
  & canvas:focus {
    outline-width: 0px;
  }
`;

export const CanvasContainer = ({ children, measure, ...props }) => {
  return (
    <Container ref={measure} {...props}>
      <Canvas>
        {children}
      </Canvas>
    </Container>
  );
};
