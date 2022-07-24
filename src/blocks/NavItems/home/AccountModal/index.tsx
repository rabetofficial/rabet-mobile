import React, { useState } from 'react';

import useActiveAccount from 'hooks/useActiveAccount';
import useTypedSelector from 'hooks/useTypedSelector';
import BottomSheet from 'components/common/BottomSheet';

import Menus from './Menus';
import AccountList from './AccountsList';

import * as S from './styles';

const AccountModal = () => {
  const { name } = useActiveAccount();
  const accounts = useTypedSelector((store) => store.accounts);

  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <>
      <S.ToggleButton type="button" onClick={onOpen}>
        {name.slice(0, 1).toUpperCase()}
      </S.ToggleButton>
      <BottomSheet isOpen={open} setOpen={setOpen} height={450}>
        <AccountList accounts={accounts} setOpen={setOpen} />
        <Menus onClose={onClose} />
      </BottomSheet>
    </>
  );
};

export default AccountModal;
