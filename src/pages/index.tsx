import React from 'react';
import type { NextPage } from 'next';

import BottomBar from 'components/common/BottomBar';
import Home from 'blocks/NavItems/home';
import Activities from 'blocks/NavItems/activities';
import Browser from 'blocks/NavItems/browser';
import Setting from 'blocks/NavItems/setting';
import HomeIcon from 'svgs/BottomBar/Home';
import LastTransactionIcon from 'svgs/BottomBar/ThunderLightning';
import BrowserIcon from 'svgs/BottomBar/TravelCompass';
import SettingIcon from 'svgs/BottomBar/SettingGear';
import { NavItemContent, NavItemMenu } from 'models';

const HomePage: NextPage = () => {
  const menus: NavItemMenu[] = [
    { id: 1, name: 'home', icon: <HomeIcon /> },
    { id: 2, name: 'transaction', icon: <LastTransactionIcon /> },
    { id: 3, name: 'browser', icon: <BrowserIcon /> },
    { id: 4, name: 'setting', icon: <SettingIcon /> },
  ];

  const contents: NavItemContent[] = [
    { id: 1, component: <Home /> },
    { id: 2, component: <Activities /> },
    { id: 3, component: <Browser /> },
    { id: 4, component: <Setting /> },
  ];
  return <BottomBar menus={menus} contents={contents} />;
};

export default HomePage;
