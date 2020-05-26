import React from 'react';
import { RefreshPageButton } from './RefreshPageButton';

export const SocketFail = () => {
  return (
    <div
      className="tw-mx-4 tw-bg-teal-100 tw-border-t-4 tw-border-teal-500 tw-rounded-b tw-text-teal-800 tw-px-4 tw-py-3 tw-shadow-md"
      role="alert"
    >
      <div className="tw-flex">
        <div className="tw-py-1">
          <svg
            className="tw-fill-current tw-h-6 tw-w-6 tw-text-teal-500 tw-mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="tw-font-bold tw-text-lg">Socket is not connected</p>
          <p>
            This utility is helps you visualize information about{' '}
            <a href="https://dev.fast.ai/">fastai2</a> models. To use this, you
            need to launch the server in python via{' '}
            <a href="https://renato145.github.io/fastexplorer/">fastexplorer</a>
            .
          </p>
          <p>
            Once you launch the server,{' '}
            <RefreshPageButton variant="info" size="sm" /> this page.
          </p>
        </div>
      </div>
    </div>
  );
};
