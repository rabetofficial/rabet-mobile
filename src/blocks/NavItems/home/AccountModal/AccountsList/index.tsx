import React from 'react';
import { useRouter } from 'next/router';

import RouteName from 'staticRes/routes';
import { IAccount } from 'reducers/accounts2';
import changeActiveAction from 'actions/accounts/changeActive';

import useActiveAccount from 'hooks/useActiveAccount';
import * as S from './styles';
import Account from './Account';

type AppProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  accounts: IAccount[];
};

const AccountList = ({ accounts, setOpen }: AppProps) => {
  const router = useRouter();
  const currentAccount = useActiveAccount();

  const changeAccount = (newAccount: IAccount) => {
    if (currentAccount.publicKey === newAccount.publicKey) {
      setOpen(false);

      return;
    }

    changeActiveAction(newAccount.publicKey);

    router.push(RouteName.Home);
  };

  return (
    <S.AccountContainer>
      {accounts.length ? (
        <S.List className="hidden-scroll">
          {accounts.map((account, index) => (
            <li
              key={`accountsList${account.publicKey}`}
              onClick={() => {
                changeAccount(account);
              }}
            >
              <Account account={account} />

              <S.Border
                className={
                  accounts.length - 1 !== index ? 'block' : 'hidden'
                }
              />
            </li>
          ))}
        </S.List>
      ) : (
        <S.NotFound>No accounts found</S.NotFound>
      )}
    </S.AccountContainer>
  );
};

export default AccountList;
