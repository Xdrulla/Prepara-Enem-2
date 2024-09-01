import React from 'react';
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';

const ProgressBar = ({ progress }) => {
  return (
    <div>
      <BootstrapProgressBar now={progress} label={`${progress}%`} />
    </div>
  );
};

export default ProgressBar;
