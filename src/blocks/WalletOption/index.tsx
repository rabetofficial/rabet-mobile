import React, { useState } from 'react';

import BottomSheet from 'components/common/BottomSheet';
import PenEdit from 'svgs/PenEdit';
import Key from 'svgs/Key';
import Trash from 'svgs/Trash';
import World from 'svgs/World';
import NavLink from 'components/common/NavLink';
import Layout from 'components/common/Layouts/BaseLayout';
import RouteName from 'staticRes/routes';
import { useRouter } from 'next/router';
import removeAccountAction from 'actions/accounts/remove';
import useActiveAccount from 'hooks/useActiveAccount';
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
    label: 'Delete Wallet',
    icon: <Trash />,
  },
];

const WalletOption = () => {
  const router = useRouter();
  const account = useActiveAccount();
  const [open, setOpen] = useState(false);

  const onDeleteClose = () => {
    setOpen(false);
  };

  const onDeleteConfirm = () => {
    removeAccountAction(account.publicKey, router.push);

    setOpen(false);
  };

  return (
    <>
      <Layout className="mt-2">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className={
              menu.id !== 4
                ? 'border-b border-primary-lighter border-solid'
                : ''
            }
          >
            <NavLink
              link={menu.link}
              name={menu.label}
              icon={menu.icon}
              className={menu.id === 4 ? '!text-error' : ''}
              onClick={() => menu.id === 4 && setOpen(true)}
            />
          </div>
        ))}
      </Layout>

      <BottomSheet isOpen={open} setOpen={setOpen} height={400}>
        <DeleteWallet
          onClose={onDeleteClose}
          onConfirm={onDeleteConfirm}
        />
      </BottomSheet>
    </>
  );
};

export default WalletOption;
