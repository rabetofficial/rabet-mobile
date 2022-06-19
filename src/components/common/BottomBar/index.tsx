import React, { useState } from 'react';

import { NavItemContent, NavItemMenu } from 'models';

import * as S from './styels';

type AppProps = {
  menus: NavItemMenu[];
  contents: NavItemContent[];
};

const BottomBar = ({ menus, contents }: AppProps) => {
  const [activeMenu, setActiveMenu] = useState(1);

  const menuWidth = 100 / menus.length;
  const borderMove = 100 * (activeMenu - 1);

  return (
    <>
      {contents.map((content) => {
        if (content.id === activeMenu) {
          return content.component;
        }
        return null;
      })}

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
    </>
  );
};

export default BottomBar;
