import React, { CSSProperties, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';

import { NavItemContent, NavItemMenu } from 'models';
import RouteName from 'staticRes/routes';

import * as S from './styels';

type AppProps = {
  menus: NavItemMenu[];
  contents: NavItemContent[];
  style?: CSSProperties;
};

const BottomBar = ({
  menus,
  contents,
  style,
}: AppProps) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(1);

  const menuWidth = 100 / menus.length;
  const borderMove = 100 * (activeMenu - 1);
  const [springLoad, setSpringLoad] = useState(true);

  const onChangeMenu = (id: number) => {
    setActiveMenu(id);

    router.push({
      pathname: RouteName.Home,
      query: { menu: id },
    });

    setSpringLoad(true);
  };

  useEffect(() => {
    if (router.query.menu) {
      const menuId = parseInt(router.query.menu as string, 10);
      setActiveMenu(menuId);
    } else {
      setActiveMenu(1);
    }

    setTimeout(() => {
      setSpringLoad(false);
    }, 1000);
  }, [router]);

  const springs = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
  });

  return (
    <>
      {contents.map((content) => {
        if (content.id === activeMenu) {
          return (
            <div key={content.id}>
              <animated.div style={springLoad ? springs : {}}>
                {content.component}
              </animated.div>
            </div>
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
    </>
  );
};
BottomBar.defaultProps = {
  style: {},
};
export default BottomBar;
