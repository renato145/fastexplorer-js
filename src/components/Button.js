import React from 'react';
import { Button as Btn } from 'react-bootstrap';

export const Button = ({ children, ...props }) => (
  <Btn  variant="primary" size="sm" {...props}>
    {children}
  </Btn>
);
