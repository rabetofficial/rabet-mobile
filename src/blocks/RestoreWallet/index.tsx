import React from 'react';
import { StrKey } from 'stellar-sdk';
import { useRouter } from 'next/router';

import RouteName from 'staticRes/routes';
import useTypedSelector from 'hooks/useTypedSelector';
import restoreAccountAction from 'actions/accounts/restore';
import PrivateKey, { FormValues } from 'components/PrivateKey';

// import { FormValues } from 'components/PrivateKey';

// import TabList from './TabList';

// type RestoreWalletProps = {
//   children?: React.ReactNode;
//   // onSubmit: (v: FormValues) => Promise<Partial<FormValues>>;
//   // onSubmitBackup: () => void;
// };
// const onSubmitBackup = () => {
//   console.log('hey');
// };
// const onSubmit = () => {
//   console.log('hey');
// };
//
// const RestoreWallet = ({
//   children,
// }: // onSubmit,
// // onSubmitBackup,
// RestoreWalletProps) => (
//   <>
//     {children}
//     <TabList
//       onSubmitBackup={onSubmitBackup}
//       onSubmitPrivateKey={onSubmit}
//     />
//   </>
// );
//
// RestoreWallet.defaultProps = {
//   children: '',
// };
//
// export default RestoreWallet;
//
//

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

    router.push(RouteName.Home);

    return {};
  };

  return (
    <>
      <PrivateKey onSubmit={onSubmit} />
    </>
  );
};

export default RestoreWallet;
