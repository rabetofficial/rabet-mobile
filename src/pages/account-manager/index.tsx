import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import RouteName from 'staticRes/routes';
import LoadingPage from 'blocks/Loading';
import useTypedSelector from 'hooks/useTypedSelector';

const AccountManager = () => {
  const router = useRouter();
  const accounts = useTypedSelector((store) => store.accounts);

  useEffect(() => {
    if (!accounts.length) {
      router.push(RouteName.First);
    } else {
      router.push(RouteName.Home);
    }
  }, []);

  return <LoadingPage />;
};

export default AccountManager;
