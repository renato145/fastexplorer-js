import React from 'react';
import { Alert } from 'react-bootstrap';

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
          <a href="#top" variant="link" onClick={reload}>
            refresh{' '}
          </a>
          this page.
        </p>
      </Alert>
    </>
  );
};
