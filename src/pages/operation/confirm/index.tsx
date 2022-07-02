import React from 'react';
import { useRouter } from 'next/router';

import ConfirmOp from 'blocks/Op/Advance/Confirm';
import RouteName from 'staticRes/routes';

const ConfirmAdvancedOperation = () => {
  const router = useRouter();

  const handleClose = () => {
    // navigate(RouteName.Home, {
    //   state: {
    //     alreadyLoaded: true,
    //   },
    // });

    router.push(RouteName.Home);
  };

  return <ConfirmOp usage="extension" onClose={handleClose} />;
};

export default ConfirmAdvancedOperation;
