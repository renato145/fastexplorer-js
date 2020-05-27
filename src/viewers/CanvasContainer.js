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

export const CanvasContainer = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Canvas>
        {children}
      </Canvas>
    </Container>
  );
};
