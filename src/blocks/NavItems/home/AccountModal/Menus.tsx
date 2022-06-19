import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import RouteName from 'staticRes/routes';
import Plus from 'svgs/Plus';
import File from 'svgs/File';
import Lock from 'svgs/Lock';

import * as S from './styles';

type AppProps = {
  onClose: () => void;
};

type Menu = {
  id: number;
  link: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

const Menus = ({ onClose }: AppProps) => {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);

  const menus: Menu[] = [
    {
      id: 1,
      icon: <Plus />,
      label: 'Create Wallet',
      link: RouteName.CreateWallet,
      onClick: () => {},
    },
    {
      id: 2,
      icon: <File />,
      link: RouteName.LoggedImportWallet,
      label: 'Import Wallet',
      onClick: () => {},
    },
  ];

  const lockMenu: Menu = {
    id: 3,
    link: '#',
    icon: <Lock />,
    label: 'Lock',
    onClick: () => {},
  };

  useEffect(() => {
    setMenuItems([...menus, lockMenu]);
  }, []);

  const handleMenuOnClick = (func: (() => void) | undefined) => {
    if (func) {
      func();
    }

    onClose();
  };

  return (
    <S.Group>
      {menuItems.map((item: Menu) => (
        <Link
          key={item.id}
          href={item.link}
          onClick={() => handleMenuOnClick(item.onClick)}
        >
          <S.GroupLink>
            {item.icon}
            {item.label}
          </S.GroupLink>
        </Link>
      ))}
    </S.Group>
  );
};

export default Menus;
