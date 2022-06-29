import React, { useState } from 'react';

import BottomSheet from 'components/common/BottomSheet';
import PenEdit from 'svgs/PenEdit';
import HandCoins from 'svgs/HandCoins';
import Key from 'svgs/Key';
import Trash from 'svgs/Trash';
import World from 'svgs/World';
import NavLink from 'components/common/NavLink';
import Layout from 'components/common/Layouts/BaseLayout';
import RouteName from 'staticRes/routes';
import DeleteWallet from './DeleteWallet';

const menus = [
  {
    id: 1,
    label: 'Edit Name',
    icon: <PenEdit size="16" />,
    link: RouteName.EditName,
  },
  {
    id: 2,
    label: 'Show private key',
    icon: <Key />,
    link: RouteName.PrivateKey,
  },
  {
    id: 3,
    label: 'Connected sites',
    icon: <World />,
    link: RouteName.ConnectedWebsites,
  },
  {
    id: 4,
    label: 'Claimable balance',
    icon: <HandCoins />,
    link: '/',
  },
  {
    id: 5,
    label: 'Delete Wallet',
    icon: <Trash />,
  },
];

const WalletOption = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <>
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
              onClick={() => menu.id === 5 && onOpen()}
            />
          </div>
        ))}
      </Layout>

      <BottomSheet isOpen={open} setOpen={setOpen} height={400}>
        <DeleteWallet onClose={onClose} />
      </BottomSheet>
    </>
  );
};

export default WalletOption;
