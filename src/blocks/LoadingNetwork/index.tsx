import React from 'react';

import Loading from 'components/Loading';

const LoadingNetwork = () => (
  <div className="flex justify-center items-center h-screen">
    <Loading title="Waiting for network" size={118} />
  </div>
);

export default LoadingNetwork;
