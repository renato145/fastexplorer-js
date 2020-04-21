import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { test_rtx } from '../reducers/socket';

const mapDispatch = {test_rtx};

const Component = ({ status, msg, test_rtx }) => {
  return (
    <div>
      <p>Socket status: {status}</p>
      <p>{msg}</p>
      <Button onClick={() => test_rtx({text: 'ulala'})}>click me</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    msg: state.socket.msg,
  };
};

// const mapDispachToProps = (dispatch) => {
//   return {
//     onTestSaga: () => dispatch({ type: test_rtx.type, payload: {text: ' YAY!!'} }),
//   };
// };

export const SocketStatus = connect(
  mapStateToProps,
  mapDispatch
)(Component);
