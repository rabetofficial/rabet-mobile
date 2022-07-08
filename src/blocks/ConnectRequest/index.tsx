import React from 'react';

import Button from 'components/common/Button';
import CheckMarkCircle from 'svgs/CheckMarkCircle';
import ButtonContainer from 'components/common/ButtonContainer';
import maxText from 'utils/maxText';

import * as S from './styles';

type ConnectRequestType = {
  onCancel: () => void;
  onConfirm: () => void;
};

const ConnectRequest = ({
  onCancel,
  onConfirm,
}: ConnectRequestType) => {
  const MockData = {
    name: 'Sam Smith',
    host: 'lumenswap.com',
    title: 'title',
    publicKey: 'GDHKYJMUNZ4STELQ7K5EH6TDGKJFE',
  };

  return (
    <>
      <div className="content">
        <S.HeadTitle>Connect Request</S.HeadTitle>
        <S.Steps>
          <S.List>
            <S.StepValue>
              <img
                src={`https://logo.clearbit.com/${MockData?.host}?size=55`}
                alt={MockData?.host[0]}
              />
            </S.StepValue>
            <S.StepLabel>{maxText(MockData?.host, 13)}</S.StepLabel>
          </S.List>

          <S.IconContainer>
            <CheckMarkCircle />
          </S.IconContainer>

          <S.List>
            <S.StepValue>{MockData.name[0]}</S.StepValue>

            <S.StepLabel>{maxText(MockData.name, 12)}</S.StepLabel>
          </S.List>
        </S.Steps>
        <S.Title>
          <a
            href={`https://${MockData?.host}`}
            target="_blank"
            rel="noreferrer"
          >
            {MockData?.host}
          </a>{' '}
          would like to connect to your account
        </S.Title>

        <ButtonContainer mt={60}>
          <Button
            type="submit"
            variant="primary"
            size="medium"
            content="Connect"
            onClick={onConfirm}
          />
        </ButtonContainer>
        <ButtonContainer mt={18}>
          <Button
            variant="default"
            size="medium"
            content="Cancel"
            onClick={onCancel}
          />
        </ButtonContainer>
      </div>
    </>
  );
};

export default ConnectRequest;
