import Router, { useRouter } from 'next/router';
import React from 'react';

import RouteName from 'staticRes/routes';
import SuccessfulSubmission from 'components/SuccessfulSubmission';

const Success = () => {
  const router = useRouter();

  const { message } = router.query;
  const handleClick = () => {
    Router.push(RouteName.Home);
  };

  console.log(`Received message: ${message}`);

  return (
    <div className="content">
      <SuccessfulSubmission onClick={handleClick} message={message} />
    </div>
  );
};

export default Success;
