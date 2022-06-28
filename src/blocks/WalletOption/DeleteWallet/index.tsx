import React from 'react';
import styled from 'styled-components';

import ExclamationCircle from 'svgs/ExclamationCircle';
import Button from 'components/common/Button';
import Layout from 'components/common/Layouts/BaseLayout';

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0 8px 0;
  svg {
    width: 34px;
    height: 34px;
  }
`;

type AppProps = {
  onClose: () => void;
};

const DeleteWallet = ({ onClose }: AppProps) => (
  <Layout className="text-center">
    <SvgContainer>
      <ExclamationCircle />
    </SvgContainer>
    <h6 className="text-lg text-error font-medium">Delete Wallet</h6>
    <p className="text-base text-primary-darker mt-2">
      Please note that by clicking on the Delete button all the
      information for this account will be deleted from the extension.
      So please make sure you have a backup of the private key for
      this account.
    </p>

    <Button
      variant="danger-fill"
      content="Delete"
      className="w-full h-[48px] mt-[35px]"
    />

    <Button
      variant="default"
      content="Cancel"
      className="w-full mt-[30px]"
      onClick={onClose}
    />
  </Layout>
);

export default DeleteWallet;
