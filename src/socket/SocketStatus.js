import React from 'react';
import { connect } from 'react-redux';

const SocketStatusComponent = ({ status }) => {
  return (
    <div>
      <p>Socket status: {status}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.socket.status
  };
};

export const SocketStatus = connect(mapStateToProps, null)(SocketStatusComponent);
