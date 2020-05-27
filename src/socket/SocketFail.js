import React from 'react';
import { RefreshPageButton } from './RefreshPageButton';

export const SocketFail = () => {
  return (
    <div
      className="max-w-screen-md mx-4 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-800 px-4 py-3 shadow"
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className="fill-current h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10 text-teal-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-lg md:text-xl xl:text-2xl">Socket is not connected</p>
          <p>
            This utility helps you visualize information about{' '}
            <a href="https://dev.fast.ai/">fastai2</a> models. To use this, you
            need to launch the server in python via{' '}
            <a href="https://renato145.github.io/fastexplorer/">fastexplorer</a>
            .
          </p>
          <p className="mt-1">
            Once you launch the server,{' '}
            <RefreshPageButton tw="bg-teal-500 hover:bg-teal-400 active:bg-teal-700" /> this page.
          </p>
        </div>
      </div>
    </div>
  );
};
