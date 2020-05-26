import React from 'react';
import { Button } from '../components/Button';

const reload = () => window.location.reload(false);

export const RefreshPageButton = ({ text = 'refresh' }) => {
  return (
    <Button color="tw-bg-teal-500" colorHover="tw-bg-teal-700" onClick={reload}>
      {text}
    </Button>
  );
};
