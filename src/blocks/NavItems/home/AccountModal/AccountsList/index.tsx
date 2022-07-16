import React from 'react';
import { useRouter } from 'next/router';

import RouteName from 'staticRes/routes';
import { IAccount } from 'reducers/accounts2';
import changeActiveAction from 'actions/accounts/changeActive';

import * as S from './styles';
import Account from './Account';

type AppProps = {
  accounts: IAccount[];
};

const AccountList = ({ accounts }: AppProps) => {
  const router = useRouter();

  const changeAccount = (account: IAccount) => {
    changeActiveAction(account.publicKey);

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
