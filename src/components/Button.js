import React from 'react';

export const Button = ({ children, color='tw-bg-blue-600', colorHover='tw-bg-blue-800', ...props }) => (
  <button
    className={`${color} hover:${colorHover} tw-px-2 tw-py-1 tw-rounded tw-text-white tw-text-sm focus:tw-outline-none focus:tw-shadow-outline tw-transition tw-duration-150`}
    {...props}
  >
    {children}
  </button>
);
