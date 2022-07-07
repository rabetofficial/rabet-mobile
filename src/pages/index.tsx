import React, { useEffect } from 'react';
import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import useTypedSelector from 'hooks/useTypedSelector';

const MainComponent: NextPage = () => {
  const user = useTypedSelector((store) => store.user);
  const router = useRouter();

  useEffect(() => {
    if (!user.logged) {
      if (user.registered) {
        router.push('/login');
        return;
      }

      router.push('/intro');
    } else {
      router.push('/home');
    }
  }, []);

  return <div>Main page</div>;
};

export default MainComponent;
