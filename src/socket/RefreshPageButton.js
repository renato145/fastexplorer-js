import React from 'react';
import { Button } from 'react-bootstrap';

const reload = () => window.location.reload(false);

export const RefreshPageButton = ({variant, size, text='refresh'}) => {
  return (
    <Button variant={variant} size={size} onClick={reload}>
      {text}
    </Button>
  );
};
