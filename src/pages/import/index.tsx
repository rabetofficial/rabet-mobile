import React from 'react';

import { FormValues } from 'components/PrivateKey';

import TabList from './TabList';

import * as S from './styles';

type RestoreWalletProps = {
  children?: React.ReactNode;
  onCancel: () => void;
  onSubmit: (v: FormValues) => Promise<Partial<FormValues>>;
  isModal?: boolean;
  onSubmitBackup: () => void;
};

const RestoreWallet = ({
  children,
  onCancel,
  onSubmit,
  isModal,
  onSubmitBackup,
}: RestoreWalletProps) => (
  <>
    {children}
    <S.TabContainer>
      <TabList
        onCancelBackup={onCancel}
        onSubmitBackup={onSubmitBackup}
        onCancelPrivateKey={onCancel}
        onSubmitPrivateKey={onSubmit}
        isModal={isModal}
      />
    </S.TabContainer>
  </>
);

RestoreWallet.defaultProps = {
  children: '',
  isModal: false,
};

export default RestoreWallet;
