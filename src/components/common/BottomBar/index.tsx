import React, { useState } from 'react';

import HomeIcon from 'svgs/BottomBar/Home';
import LastTransactionIcon from 'svgs/BottomBar/ThunderLightning';
import BrowserIcon from 'svgs/BottomBar/TravelCompass';
import SettingIcon from 'svgs/BottomBar/SettingGear';

import * as S from './styels';

const BottomBar = () => {
  const [activeMenu, setActiveMenu] = useState(1);

  const menus = [
    { id: 1, name: 'home', icon: <HomeIcon /> },
    { id: 2, name: 'transaction', icon: <LastTransactionIcon /> },
    { id: 3, name: 'browser', icon: <BrowserIcon /> },
    { id: 4, name: 'setting', icon: <SettingIcon /> },
  ];

  const menuWidth = 100 / menus.length;
  const borderMove = 100 * (activeMenu - 1);

  return (
    <div className="h-[60px]">
      <S.List>
        {menus.map((menu) => (
          <li
            key={menu.id}
            onClick={() => setActiveMenu(menu.id)}
            className={activeMenu === menu.id ? 'active' : ''}
            style={{ width: `${menuWidth}%` }}
          >
            {menu.id === 1 && (
              <S.Border style={{ left: `${borderMove}%` }} />
            )}
            {menu.icon}
          </li>
        ))}
      </S.List>
    </div>
  );
};

export default BottomBar;
