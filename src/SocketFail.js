import React from 'react';
import { Alert, Button } from 'react-bootstrap';

const reload = () => window.location.reload(false);

export const SocketFail = () => {
  return (
    <>
      <Alert variant="info">
        <p>
          This utility is helps you visualize information about{' '}
          <a href="https://dev.fast.ai/">fastai2</a> models. To use this, you
          need to launch the server in python via{' '}
          <a href="https://renato145.github.io/fastexplorer/">fastexplorer</a>.
        </p>
        <p>
          Once you launch the server,{' '}
          <Button variant="info" size="sm" onClick={reload}>
            refresh
          </Button>
          {' '}this page.
        </p>
      </Alert>
    </>
  );
};
