import React from 'react';
import { useRouter } from 'next/router';

import Logo from 'components/Logo';
import Button from 'components/common/Button';
import ButtonContainer from 'components/common/ButtonContainer';
import Layout from 'components/common/Layouts/BaseLayout';

const FirstPage = () => {
  const router = useRouter();

  return (
    <Layout className="flex justify-center items-center">
      <Logo className="mt-[50px]" />

      <ButtonContainer fixedBottom mb={104}>
        <Button
          type="button"
          variant="primary"
          size="medium"
          content="Create Wallet"
          onClick={() => {
            router.push('/create-wallet');
          }}
        />
      </ButtonContainer>

      <ButtonContainer fixedBottom mb={39}>
        <Button
          type="button"
          variant="outlined"
          size="medium"
          content="Import Wallet"
          onClick={() => {
            router.push('/restore-wallet');
          }}
        />
      </ButtonContainer>
    </Layout>
  );
};

export default FirstPage;
