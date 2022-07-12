import React, { useEffect } from 'react';
import useTypedSelector from 'hooks/useTypedSelector';
import Loading from 'components/Loading';
import { useRouter } from 'next/router';
import store from 'actions/accounts/store';
import { get } from 'helpers/storage';
import RouteName from 'staticRes/routes';
import userRegistered from 'actions/user/userRegistered';

const RoutesManager = ({ pageProps, children }) => {
  const router = useRouter();
  const [user, accounts] = useTypedSelector((store) => [
    store.user,
    store.accounts,
  ]);

  useEffect(() => {
    get('data').then((d) => {
      if (d) {
        userRegistered();

        if (!user.logged) {
          router.push(RouteName.Login);
        }
      }
    });
  }, []);

  useEffect(() => {
    // console.log(pageProps);
    // if (!user.registered) {
    //   router.push('/intro');
    // } else if (!user.logged) {
    //   router.push('/login');
    // } else if (!accounts) {
    //   router.push('/first');
    // } else {
    //   if (pageProps.role === 'before-login') {
    //     router.push('/home');
    //   } else {
    //     router.push(router.pathname);
    //   }
    // }
  }, []);

  // return <Loading title="Redirecting" size={32} />;
  return children;
};

export default RoutesManager;
