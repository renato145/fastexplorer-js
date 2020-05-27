import React from 'react';
import { connect } from 'react-redux';
import { RefreshPageButton } from './RefreshPageButton';
import { socketStatus } from '../constants/serverEvents';

const socketClasses = {
  [socketStatus.WAITING]: 'text-blue-600',
  [socketStatus.CONNECTED]: 'text-green-600',
  [socketStatus.CLOSED]: 'text-red-600',
};

const SocketStatusComponent = ({ status, connectedBefore }) => {
  return (
    <div>
      <p className="font-mono text-sm text-gray-800 font-semibold inline">
        Socket status: <span className={socketClasses[status]}>{status}</span>{' '}
      </p>
      {status === 'closed' && connectedBefore && <RefreshPageButton />}
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
