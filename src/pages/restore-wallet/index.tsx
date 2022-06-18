import React from 'react';
import { StrKey } from 'stellar-sdk';
import { useRouter } from 'next/router';

import useTypedSelector from 'hooks/useTypedSelector';
import { FormValues } from 'components/PrivateKey';
import restoreAccountAction from 'actions/accounts/restore';
import RestoreWalletComponent from 'components/RestoreWallet';
import ExtTitle from 'components/common/ExitTitle';

const RestoreWallet = () => {
  const router = useRouter();
  const accounts = useTypedSelector((store) => store.accounts);

  const onSubmit = async (values: FormValues) => {
    if (!StrKey.isValidEd25519SecretSeed(values.key)) {
      return { key: 'Invalid private key.' };
    }

    const isDuplicated = accounts.some(
      (x) => x.privateKey === values.key,
    );

    if (isDuplicated) {
      return { key: 'Account is duplicated.' };
    }

    const account = await restoreAccountAction(values.key);

    if (account === 'duplicate') {
      return {
        key: "The account you're trying to import is a duplicate.",
      };
    }

    if (!account) {
      return { key: 'Invalid seed.' };
    }

    router.push('Home');

    return {};
  };

  const onSubmitBackup = () => {
    router.push('Home');
  };

  return (
    <RestoreWalletComponent
      onSubmit={onSubmit}
      onSubmitBackup={onSubmitBackup}
    >
      <ExtTitle title="Import wallet" />
    </RestoreWalletComponent>
  );
};

export default RestoreWallet;
