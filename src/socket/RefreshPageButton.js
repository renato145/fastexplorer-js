import React from 'react';

const reload = () => window.location.reload(false);

export const RefreshPageButton = ({ text='refresh', tw }) => {
  return (
    <button className={`text-sm py-1 px-2 ${tw}`} onClick={reload}>
      {text}
    </button>
  );
};
