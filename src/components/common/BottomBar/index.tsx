import React, { CSSProperties, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { NavItemContent, NavItemMenu } from 'models';
import RouteName from 'staticRes/routes';
import SpringLoad from 'components/common/SpringLoad';

import * as S from './styels';

type AppProps = {
  menus: NavItemMenu[];
  contents: NavItemContent[];
  style?: CSSProperties;
};

const BottomBar = ({ menus, contents, style }: AppProps) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(1);

  const menuWidth = 100 / menus.length;
  const borderMove = 100 * (activeMenu - 1);

  const onChangeMenu = (id: number) => {
    setActiveMenu(id);
    router.push({
      pathname: RouteName.Home,
      query: { menu: id },
    });
  };

  useEffect(() => {
    if (router.query.menu) {
      const menuId = parseInt(router.query.menu as string, 10);
      setActiveMenu(menuId);
    } else {
      setActiveMenu(1);
    }
  }, [router]);

  return (
    <div>
      {contents.map((content) => {
        if (content.id === activeMenu) {
          return (
            <SpringLoad key={content.id}>
              {content.component}
            </SpringLoad>
          );
        }
        return null;
      })}

      <div className="h-[60px]">
        <S.List style={style}>
          {menus.map((menu) => (
            <li
              key={menu.id}
              onClick={() => onChangeMenu(menu.id)}
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
    </div>
  );
};
BottomBar.defaultProps = {
  style: {},
};
export default BottomBar;
