import React, { useState } from 'react';
import styled from 'styled-components';

import BottomSheet from 'components/common/BottomSheet';
import ExtTitle from 'components/common/ExitTitle';
import PenEdit from 'svgs/PenEdit';
import HandCoins from 'svgs/HandCoins';
import Key from 'svgs/Key';
import Trash from 'svgs/Trash';
import World from 'svgs/World';
import NavLink from 'components/common/NavLink';
import Layout from 'components/common/Layouts/BaseLayout';
import RouteName from 'staticRes/routes';
import ExclamationCircle from 'svgs/ExclamationCircle';
import Button from 'components/common/Button';

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0 8px 0;
  svg {
    width: 34px;
    height: 34px;
  }
`;

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
    label: 'Delete account',
    icon: <Trash />,
  },
];

const WalletOption = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
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
              onClick={() => menu.id === 5 && onOpen()}
            />
          </div>
        ))}
      </Layout>

      <BottomSheet isOpen={open} setOpen={setOpen} height={400}>
        <Layout className="text-center">
          <SvgContainer>
            <ExclamationCircle />
          </SvgContainer>
          <h6 className="text-lg text-error font-medium">
            Delete Wallet
          </h6>
          <p className="text-base text-primary-darker mt-2">
            Please note that by clicking on the Delete button all the
            information for this account will be deleted from the
            extension. So please make sure you have a backup of the
            private key for this account.
          </p>

          <Button
            variant="danger-fill"
            content="Delete"
            className="w-full h-[48px] mt-[35px]"
          />

          <Button
            variant="default"
            content="Cancel"
            className="w-full mt-[30px]"
            onClick={onClose}
          />
        </Layout>
      </BottomSheet>
    </>
  );
};

export default WalletOption;
