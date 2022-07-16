import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import lockAction from 'actions/accounts/lock';
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

  const handleLock = () => {
    lockAction();
  };

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
      icon: (
        <div className="mr-1">
          <File />
        </div>
      ),
      link: RouteName.RestoreWallet,
      label: 'Import Wallet',
      onClick: () => {},
    },
  ];

  const lockMenu: Menu = {
    id: 3,
    link: RouteName.Login,
    icon: <Lock />,
    label: 'Lock',
    onClick: handleLock,
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
        <Link href={item.link} key={item.id}>
          <S.GroupLink
            onClick={() => handleMenuOnClick(item.onClick)}
          >
            <S.ItemIcon> {item.icon}</S.ItemIcon>
            {item.label}
          </S.GroupLink>
        </Link>
      ))}
    </S.Group>
  );
};

export default Menus;
