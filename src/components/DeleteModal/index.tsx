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

const SmallSvgContainer = styled.div`
  svg {
    width: 20px;
    height: 20px;
  }
`;

type AppProps = {
  onClose?: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  variant: 'medium' | 'large';
};

const DeleteModal = ({
  title,
  message,
  onClose,
  onConfirm,
  variant,
}: AppProps) => (
  <Layout>
    {variant === 'large' ? (
      <div className="text-center">
        <SvgContainer>
          <ExclamationCircle />
        </SvgContainer>

        <h6 className="text-lg text-error font-medium">{title}</h6>

        <p className="text-base text-primary-darker mt-2">
          {message}
        </p>

        <Button
          variant="danger-fill"
          content="Delete"
          className="w-full h-[48px] mt-[35px]"
          onClick={onConfirm}
        />

        <Button
          variant="default"
          content="Cancel"
          className="w-full mt-[30px]"
          onClick={onClose}
        />
      </div>
    ) : (
      <div className="text-left">
        <h6 className="text-lg text-error font-medium flex items-center">
          <SmallSvgContainer className="mr-1">
            <ExclamationCircle />
          </SmallSvgContainer>
          {title}
        </h6>

        <p className="text-base text-primary-darker mt-2">
          {message}
        </p>

        <Button
          variant="danger-fill"
          content="Delete"
          className="w-full h-[48px] mt-[35px]"
          onClick={onConfirm}
        />
      </div>
    )}
  </Layout>
);

DeleteModal.defaultProps = {
  onClose: () => {},
};

export default DeleteModal;
