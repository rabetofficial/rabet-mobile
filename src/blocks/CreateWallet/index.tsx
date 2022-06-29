import React from 'react';
import { useRouter } from 'next/router';

import CreateWalletComponrnt, {
  FormValues,
} from 'components/CreateWallet';
import useTypedSelector from 'hooks/useTypedSelector';
import createAccountAction from 'actions/accounts/create';

const CreateWallet = () => {
  const router = useRouter();
  const accounts = useTypedSelector((store) => store.accounts);

  const onSubmit = async (values: FormValues) => {
    const isDone = await createAccountAction(values.name);

    if (!isDone) {
      return {
        name: 'Error.',
      };
    }

    router.push('/Backup-file');

    return {};
  };

  return <CreateWalletComponrnt onSubmit={onSubmit} />;
};

export default CreateWallet;
