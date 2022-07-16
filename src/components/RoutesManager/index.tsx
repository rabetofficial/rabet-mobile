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
    // console.log('i happen');
    // console.log(router, user);
    // if (user.registered) {
    //   userRegistered();
    //   if (!user.logged) {
    //     router.push(RouteName.Login);
    //     console.log('khar man bakhabare');
    //   } else {
    //     router.push(RouteName.Home);
    //   }
    // } else {
    //   router.push(RouteName.Introduction);
    //   setStatus('self');
    // }
  }, [JSON.stringify(router)]);

  useEffect(() => {
    // console.log('good good');
    // console.log(pageProps, user);
    // if (pageProps.role === 'before-login' && user.logged) {
    //   router.push(RouteName.Home);
    // } else {
    //   setStatus('self');
    // }
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
  console.log(user, pageProps);
  if (pageProps.role === 'before-register') {
    if (!user.registered) {
      return children;
    }
    router.push(RouteName.Login);
  }

  // if (!user.logged && pageProps.role === 'before-login') {
  //   return children;
  // }

  return (
    <div className="flex justify-center h-screen">
      <Loading title="Redirecting" size={72} />
    </div>
  );
};

export default RoutesManager;
