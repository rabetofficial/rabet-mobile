import React from 'react';

import ExtTitle from 'components/common/ExitTitle';
import PenEdit from 'svgs/PenEdit';
import HandCoins from 'svgs/HandCoins';
import Key from 'svgs/Key';
import Trash from 'svgs/Trash';
import World from 'svgs/World';
import NavLink from 'components/common/NavLink';
import Layout from 'components/common/Layouts/BaseLayout';

const menus = [
  {
    id: 1,
    label: 'Edit Name',
    icon: <PenEdit size="16" />,
    link: '/',
  },
  {
    id: 2,
    label: 'Show private key',
    icon: <Key />,
    link: '/',
  },
  {
    id: 3,
    label: 'Connected sites',
    icon: <World />,
    link: '/',
  },
  {
    id: 4,
    label: 'Claimable balance',
    icon: <HandCoins />,
    link: '/',
  },
  {
    id: 5,
    label: 'Delete account',
    icon: <Trash />,
    onClick: () => {},
  },
];

const WalletOption = () => (
  <>
    <ExtTitle title="Wallet options" />

    <Layout className="mt-2">
      {menus.map((menu) => (
        <div
          key={menu.id}
          className={
            menu.id !== 5
              ? 'border-b border-primary-lighter border-solid'
              : ''
          }
        >
          <NavLink
            link={menu.link}
            name={menu.label}
            icon={menu.icon}
            className={menu.id === 5 ? '!text-error' : ''}
            onClick={menu.onClick}
          />
        </div>
      ))}
    </Layout>
  </>
);

export default WalletOption;
