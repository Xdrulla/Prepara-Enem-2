import React from 'react';
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';

const ProgressBar = ({ progress }) => {
  return (
    <div className="text-center">
      <BootstrapProgressBar now={progress} label={`${progress}%`} />
    </div>
  );
};

export default ProgressBar;
