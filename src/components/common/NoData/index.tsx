import React from 'react';

type AppProps = {
  msg: string;
  className?: string;
};

const NoData = ({ msg, className }: AppProps) => (
  <div
    className={`text-base text-primary py-6 text-center font-medium	${className}`}
  >
    {msg}
  </div>
);

NoData.defaultProps = {
  className: '',
};

export default NoData;
