import React from 'react';
import { useRouter } from 'next/router';

import RouteName from 'staticRes/routes';
import ErrorComponent from 'components/Error';

const Error = () => {
  const router = useRouter();

  const { message } = router.query;

  const handleClick = () => {
    router.push(RouteName.Home);
  };

  return (
    <div className="content">
      <ErrorComponent onClick={handleClick} message={message} />
    </div>
  );
};

export default Error;
