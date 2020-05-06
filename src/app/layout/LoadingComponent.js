import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingComponent = () => {
  return (
    <div className="loading-component">
      <Spinner animation="border" role="status" />
      <div>Loading...</div>
    </div>
  );
};

export default LoadingComponent;
