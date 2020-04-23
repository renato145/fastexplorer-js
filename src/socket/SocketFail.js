import React from 'react';
import { Alert } from 'react-bootstrap';
import { RefreshPageButton } from './RefreshPageButton';

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
          <RefreshPageButton variant="info" size="sm" />
          {' '}this page.
        </p>
      </Alert>
    </>
  );
};
