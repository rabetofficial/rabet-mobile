import React from 'react';
import type { NextPage } from 'next';

import Home from 'blocks/NavItems/home';
import HomeIcon from 'svgs/BottomBar/Home';
import Browser from 'blocks/NavItems/browser';
import Setting from 'blocks/NavItems/setting';
import BottomBar from 'components/common/BottomBar';
import Activities from 'blocks/NavItems/activities';
import SettingIcon from 'svgs/BottomBar/SettingGear';
import { NavItemContent, NavItemMenu } from 'models';
import BrowserIcon from 'svgs/BottomBar/TravelCompass';
import LastTransactionIcon from 'svgs/BottomBar/ThunderLightning';
import useLoadHome from 'hooks/useLoadHome';
import useAppDispatch from 'hooks/useAppDispatch';
import { useRouter } from 'next/router';

export const getServerSideProps = () => ({
  props: {
    logged: 2,
    registered: 2,
    account: 2,
  },
});

const HomePage: NextPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useLoadHome(dispatch);
  const router = useRouter();

  const firstLoading = isLoading && router.asPath === '/home';

  const menus: NavItemMenu[] = [
    { id: 1, name: 'home', icon: <HomeIcon /> },
    { id: 2, name: 'transaction', icon: <LastTransactionIcon /> },
    { id: 3, name: 'browser', icon: <BrowserIcon /> },
    { id: 4, name: 'setting', icon: <SettingIcon /> },
  ];

  const contents: NavItemContent[] = [
    { id: 1, component: <Home loading={firstLoading} /> },
    { id: 2, component: <Activities /> },
    { id: 3, component: <Browser /> },
    { id: 4, component: <Setting /> },
  ];
  return (
    <BottomBar
      menus={menus}
      contents={contents}
      style={{ display: firstLoading ? 'none' : '' }}
    />
  );
};

export default HomePage;
