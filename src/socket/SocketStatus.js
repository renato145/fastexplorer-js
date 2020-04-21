import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { test_rtx } from '../reducers/socket';
import { test_saga } from '../sagas/testSaga';

const mapDispatch = { test_rtx, test_saga };

const Component = ({ status, msg, test_rtx, test_saga }) => {
  return (
    <div>
      <p>Socket status: {status}</p>
      <p>{msg}</p>
      <Button onClick={() => test_rtx({ text: 'normal call' })}>click me</Button>
      <Button onClick={() => test_saga({ text: 'async call'})}>
        click me async
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    msg: state.socket.msg,
  };
};

export const SocketStatus = connect(mapStateToProps, mapDispatch)(Component);
