import React, { useState } from 'react';

import Button from 'components/common/Button';
import CheckMarkCircle from 'svgs/CheckMarkCircle';
import ButtonContainer from 'components/common/ButtonContainer';
import BottomSheet from 'components/common/BottomSheet';
import ApproveTransaction from 'blocks/ApproveTransaction';

import * as S from './styles';

type ConnectRequestType = { onCancel: () => void };

const ConnectRequest = ({ onCancel }: ConnectRequestType) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  const MockData = {
    name: 'John Due',
    host: 'host',
    title: 'title',
    publicKey:
      'GDHKYJMUNZ4STELQ7K5EH6TDGKJ2QJ5UPX5HWLOFWRC4H7NFG4JJHNFE',
  };

  const handleConnect = () => {
    setOpen(true);

    return (
      <BottomSheet isOpen={open} setOpen={setOpen} height={504}>
        <ApproveTransaction onCancel={onClose} />
      </BottomSheet>
    );
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
                alt={MockData?.host}
              />
            </S.StepValue>
            <S.StepLabel>{MockData?.host}</S.StepLabel>
          </S.List>

          <S.IconContainer>
            <CheckMarkCircle />
          </S.IconContainer>

          <S.List>
            <S.StepValue>{MockData.name[0]}</S.StepValue>

            <S.StepLabel>{MockData?.name}</S.StepLabel>
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

        <ButtonContainer mt={47}>
          <Button
            type="submit"
            variant="primary"
            size="medium"
            content="Connect"
            onClick={handleConnect}
          />
        </ButtonContainer>
        <ButtonContainer mt={23}>
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
