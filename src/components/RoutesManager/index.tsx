import React, { useEffect, useState } from 'react';
import useTypedSelector from 'hooks/useTypedSelector';
import Loading from 'components/Loading';
import { useRouter } from 'next/router';
import store from 'actions/accounts/store';
import { get } from 'helpers/storage';
import RouteName from 'staticRes/routes';
import userRegistered from 'actions/user/userRegistered';

const RoutesManager = ({ pageProps, children }) => {
  const router = useRouter();
  const [status, setStatus] = useState('');
  const [user, accounts] = useTypedSelector((store) => [
    store.user,
    store.accounts,
  ]);

  useEffect(() => {
    console.log('i happen');
    get('data').then((d) => {
      if (d) {
        userRegistered();

        if (!user.logged) {
          router.push(RouteName.Login);
        } else {
          router.push(RouteName.Home);
        }
      } else {
        router.push(RouteName.Introduction);
      }
    });
  }, []);

  useEffect(() => {
    // console.log('good good');
    console.log(pageProps, user);
    if (pageProps.role === 'before-login' && user.logged) {
      router.push(RouteName.Home);
    } else {
      setStatus('self');
    }
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
  });

  if (status === 'self') {
    return children;
  }
  return (
    <div className="flex justify-center">
      <Loading title="Redirecting" size={72} />
    </div>
  );
  // return children;
};

export default RoutesManager;
