import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import isInPWA from 'helpers/isInPWA';
import RouteName from 'staticRes/routes';
import LoadingOne from 'pages/loading-one';
import loadUser from 'actions/user/loadUser';
import useTypedSelector from 'hooks/useTypedSelector';

// import lockAction from 'actions/accounts/lock';

type RoutesManagerType = {
  children: JSX.Element;
  pageProps: {
    logged: 0 | 1 | 2;
    registered: 0 | 1 | 2;
    account: 0 | 1 | 2;
    before_pwa?: boolean;
  };
};

const RoutesManager = ({
  pageProps,
  children,
}: RoutesManagerType) => {
  const router = useRouter();
  const [pass, setPass] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, accounts] = useTypedSelector((store) => [
    store.user,
    store.accounts,
  ]);

  useEffect(() => {
    loadUser().then(() => {
      setIsLoaded(true);
      if (!user.logged) {
        router.push(RouteName.Login);
      }
    });
  }, []);

  // useEffect(() => {
  //   const visibilityHandler = (e) => {
  //     lockAction();
  //
  //     router.push(RouteName.Login);
  //   };
  //
  //   document.addEventListener('visibilitychange', visibilityHandler);
  //
  //   return () => {
  //     document.removeEventListener(
  //       'visibilitychange',
  //       visibilityHandler,
  //     );
  //   };
  // }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    // const isUsingPWA = isInPWA();
    //
    // if (!isUsingPWA) {
    //   if (pageProps.before_pwa) {
    //     setPass(true);
    //     return;
    //   }
    //
    //   router.push('/');
    //   return;
    // }

    let passCount = 0;

    if (pageProps.registered === 0) {
      if (user.registered) {
        router.push(RouteName.Home);
        return;
      }
      passCount += 1;
    } else if (pageProps.registered === 1) {
      passCount += 1;
    } else if (pageProps.registered === 2) {
      if (user.registered) {
        passCount += 1;
      } else {
        router.push(RouteName.Introduction);
        return;
      }
    }

    if (pageProps.logged === 0) {
      if (user.logged) {
        router.push(RouteName.Home);
        return;
      }
      passCount += 1;
    } else if (pageProps.logged === 1) {
      passCount += 1;
    } else if (pageProps.logged === 2) {
      if (user.logged) {
        passCount += 1;
      } else {
        router.push(RouteName.Login);
        return;
      }
    }

    if (pageProps.account === 0) {
      if (accounts.length) {
        router.push(RouteName.Home);
        return;
      }
      passCount += 1;
    } else if (pageProps.account === 1) {
      passCount += 1;
    } else if (pageProps.account === 2) {
      if (accounts.length) {
        passCount += 1;
      } else {
        router.push(RouteName.First);
        return;
      }
    }

    if (passCount === 3) {
      setPass(true);
    }
  }, [JSON.stringify(router)]);

  if (pass) {
    return children;
  }

  return <LoadingOne />;
};

export default RoutesManager;
