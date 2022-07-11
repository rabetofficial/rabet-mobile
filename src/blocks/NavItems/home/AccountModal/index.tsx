import React, { useState } from 'react';
import BottomSheet from 'components/common/BottomSheet';
import useActiveAccount from 'hooks/useActiveAccount';
import { IAccount } from 'reducers/accounts2';
import AccountList from './AccountsList';
import Menus from './Menus';

import * as S from './styles';

const AccountModal = () => {
  const { name } = useActiveAccount();
  const [activeAccounts, setActiveAccounts] = useState<IAccount[]>(
    [],
  );
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <>
      <S.ToggleButton type="button" onClick={onOpen}>
        {name.slice(0, 1).toUpperCase()}
      </S.ToggleButton>
      <BottomSheet isOpen={open} setOpen={setOpen} height={450}>
        <div className="px-4">
          <AccountList accounts={activeAccounts} />
        </div>

        <Menus onClose={onClose} />
      </BottomSheet>
    </>
  );
};

export default AccountModal;
