import React from 'react';
import styled from 'styled-components';

import PenEdit from 'svgs/PenEdit';
import HandCoins from 'svgs/HandCoins';
import Trash from 'svgs/TrashDelete';
import World from 'svgs/World';
// import useTypedSelector from 'hooks/useTypedSelector';

import DropMenu from './DropMenu';

// type DropDawnProps = {
//   setEditableName: React.Dispatch<React.SetStateAction<boolean>>;
//   { setEditableName }: DropDawnProps
// };

const Expand = styled.a`
  width: 2.5px;
  display: flex;
  color: black;
  font-size: 17px;
  margin-top: 14px;
  margin-right: 9px;
  transform: rotate(90deg);
`;

const DropDownList = () => {
  // const { mode } = useTypedSelector((store) => store.options);

  const dropMenuItems = [
    {
      id: 1,
      label: 'Edit Name',
      icon: <PenEdit size="16" />,
      // onClick: () => {
      //   setEditableName(true);
      // },
    },
    {
      id: 3,
      label: 'Show private key',
      icon: 'icon-key',
      // onClick: () => {
      //   navigate(RouteName.ShowPrivateKey);
      // },
    },
    {
      id: 4,
      label: 'Connected sites',
      icon: <World />,
      // onClick: () => {
      //   navigate(RouteName.ConnectedWebsites);
      // },
    },
    {
      id: 5,
      label: 'Claimable balance',
      icon: <HandCoins />,
      // onClick: () => {
      //   navigate(RouteName.ClaimableBalances);
      // },
    },
    {
      id: 6,
      label: <p className="text-error">Delete account</p>,
      icon: <Trash />,
      // onClick: () => {
      //   navigate(RouteName.DeleteAccount);
      // },
    },
  ];

  // if (mode === 'ADVANCED') {
  //   dropMenuItems.splice(2, 0, {
  //     id: 3,
  //     label: 'Show flags',
  //     icon: 'icon-flag',
  //     // onClick: () => {
  //     //   navigate(RouteName.Flags);
  //     // },
  //   });
  // }

  return (
    <DropMenu width={198} items={dropMenuItems}>
      <Expand>
        <span className="icon-expand-more" />
      </Expand>
    </DropMenu>
  );
};

export default DropDownList;
