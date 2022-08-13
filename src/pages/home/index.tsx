import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';

import Home from 'blocks/NavItems/home';
import HomeIcon from 'svgs/BottomBar/Home';
import useLoadHome from 'hooks/useLoadHome';
import Browser from 'blocks/NavItems/browser';
import Setting from 'blocks/NavItems/setting';
import useAppDispatch from 'hooks/useAppDispatch';
import BottomBar from 'components/common/BottomBar';
import Activities from 'blocks/NavItems/activities';
import SettingIcon from 'svgs/BottomBar/SettingGear';
import { NavItemContent, NavItemMenu } from 'models';
import BrowserIcon from 'svgs/BottomBar/TravelCompass';
import LastTransactionIcon from 'svgs/BottomBar/ThunderLightning';
import isEmpty from 'helpers/isEmpty';

export const getServerSideProps = () => ({
  props: {
    logged: 2,
    registered: 2,
    account: 2,
  },
});

const HomePage: NextPage = () => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({} as any), []);

  const dispatch = useAppDispatch();
  const isLoading = useLoadHome(dispatch, forceUpdate);

  const firstLoading =
    isLoading && !isEmpty(localStorage.getItem('home'));

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
