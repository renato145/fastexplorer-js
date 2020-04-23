import React from 'react';
import { connect } from 'react-redux';
import { RefreshPageButton } from './RefreshPageButton';

const SocketStatusComponent = ({ status, connectedBefore }) => {
  return (
    <div>
      <p>
        Socket status: {status}{' '}
        {status === 'closed' && connectedBefore && (
          <RefreshPageButton variant="info" size="sm" />
        )}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.socket.status,
    connectedBefore: state.socket.connectedBefore,
  };
};

export const SocketStatus = connect(
  mapStateToProps,
  null
)(SocketStatusComponent);
