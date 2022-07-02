import React from 'react';

import { Contact } from 'reducers/contacts';
import { IAccount } from 'reducers/accounts2';
import ScrollBar from 'components/common/ScrollBar';
import Account from './Account';

import * as S from './styles';

export type AccountLike = IAccount | Contact;

type AppProps = {
  purpose?: string;
  name: 'accounts' | 'contacts';
  accounts: AccountLike[];
  onChange: (publicKey: string, memo: string) => void;
};

const AccountList = ({
  name,
  accounts,
  onChange,
  purpose,
}: AppProps) => (
  <>
    {accounts.length ? (
      <ScrollBar isHidden maxHeight={210}>
        <S.List>
          {accounts.map((account: AccountLike) => (
            <li
              key={`accountsList${account.publicKey}`}
              onClick={() => {
                onChange(account.publicKey, account.memo);
              }}
            >
              <Account account={account} purpose={purpose} />
            </li>
          ))}
        </S.List>
      </ScrollBar>
    ) : (
      <S.NotFound>No {name} found</S.NotFound>
    )}
  </>
);

AccountList.defaultProps = {
  purpose: '',
};

export default AccountList;
