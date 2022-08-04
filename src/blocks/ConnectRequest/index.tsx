import React from 'react';

import maxText from 'utils/maxText';
import shortName from 'helpers/shortName';
import Button from 'components/common/Button';
import { IAccount } from 'reducers/accounts2';
import CheckMarkCircle from 'svgs/CheckMarkCircle';
import ButtonContainer from 'components/common/ButtonContainer';

import * as S from './styles';

type ConnectRequestType = {
  origin: string;
  account: IAccount;
  onCancel: () => void;
  onConfirm: () => void;
};

const ConnectRequest = ({
  onCancel,
  onConfirm,
  origin,
  account,
}: ConnectRequestType) => {
  const host = origin || 'https://unknown.com';
  const { hostname } = new URL(host);

  return (
    <>
      <div className="content">
        <S.HeadTitle>Connect Request</S.HeadTitle>
        <S.Steps>
          <S.List>
            <S.StepValue>
              <img
                src={`https://logo.clearbit.com/${hostname}?size=55`}
                alt={hostname[0] || 'W'}
              />
            </S.StepValue>
            <S.StepLabel>{maxText(hostname, 13)}</S.StepLabel>
          </S.List>

          <S.IconContainer>
            <CheckMarkCircle />
          </S.IconContainer>

          <S.List>
            <S.StepValue>{shortName(account.name)}</S.StepValue>

            <S.StepLabel>{maxText(account.name, 12)}</S.StepLabel>
          </S.List>
        </S.Steps>
        <S.Title>
          <a
            href={`https://${hostname}`}
            target="_blank"
            rel="noreferrer"
          >
            {hostname}
          </a>{' '}
          would like to connect to your account
        </S.Title>

        <ButtonContainer mt={40}>
          <Button
            type="submit"
            variant="primary"
            size="medium"
            content="Connect"
            onClick={onConfirm}
          />
        </ButtonContainer>
        <ButtonContainer fixedBottom mb={25}>
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
