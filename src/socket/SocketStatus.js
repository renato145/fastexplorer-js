import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const Component = ({ status, msg, onTestSaga }) => {
  return (
    <div>
      <p>Socket status: {status}</p>
      <p>{msg}</p>
      <Button onClick={onTestSaga}>click me</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    msg: state.socket.msg,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    onTestSaga: () => dispatch({ type: 'TEST_SAGA', value: ' YAY!!' }),
  };
};

export const SocketStatus = connect(
  mapStateToProps,
  mapDispachToProps
)(Component);
