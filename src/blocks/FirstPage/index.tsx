import React from 'react';
import { useRouter } from 'next/router';

import Logo from 'components/Logo';
import RouteName from 'staticRes/routes';
import Button from 'components/common/Button';
import ButtonContainer from 'components/common/ButtonContainer';
import Layout from 'components/common/Layouts/BaseLayout';

const FirstPage = () => {
  const router = useRouter();

  const onCreate = () => {
    router.push(RouteName.CreateWallet);
  };

  const onImport = () => {
    router.push(RouteName.RestoreWallet);
  };

  return (
    <Layout className="flex justify-center items-center">
      <Logo className="mt-[50px]" />

      <ButtonContainer fixedBottom mb={104}>
        <Button
          type="button"
          variant="primary"
          size="medium"
          content="Create Wallet"
          onClick={onCreate}
        />
      </ButtonContainer>

      <ButtonContainer fixedBottom mb={39}>
        <Button
          type="button"
          variant="outlined"
          size="medium"
          content="Import Wallet"
          onClick={onImport}
        />
      </ButtonContainer>
    </Layout>
  );
};

export default FirstPage;
