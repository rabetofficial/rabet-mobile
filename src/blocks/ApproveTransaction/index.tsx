import { Networks } from 'stellar-sdk';
import React, { useState } from 'react';

import maxText from 'utils/maxText';
import NoData from 'components/common/NoData';
import Button from 'components/common/Button';
import CopyText from 'components/common/CopyText';
import ScrollBar from 'components/common/ScrollBar';
import useActiveAccount from 'hooks/useActiveAccount';
import ButtonContainer from 'components/common/ButtonContainer';
import { ApproveTransactionState } from 'blocks/NavItems/browser';

import * as S from './styles';
import Operations from './Operations';

type ApproveType = {
  onCancel: () => void;
  onConfirm: () => void;
  data: ApproveTransactionState;
};

const ApproveTransaction = ({
  onCancel,
  onConfirm,
  data,
}: ApproveType) => {
  const account = useActiveAccount();

  const operations = data.transaction?.operations;

  let altName = data.origin ? data.origin[0] : 'W';
  altName = altName.toUpperCase();

  const isMainNetwork =
    data.network?.includes('main') ||
    data.network === Networks.PUBLIC;

  let isLoaded = true;

  return (
    <>
      <S.TopContainer>
        {isMainNetwork ? (
          <S.NetworkStatus type="main">Main network</S.NetworkStatus>
        ) : (
          <S.NetworkStatus type="test">Test network</S.NetworkStatus>
        )}

        <S.Centered>
          <S.ImgContainer>
            {!isLoaded ? (
              <p>{altName}</p>
            ) : (
              <img
                src={`https://logo.clearbit.com/${data.origin || ''}`}
                alt={data.origin || ' '}
                onError={() => {
                  isLoaded = false;
                }}
              />
            )}
          </S.ImgContainer>

          <S.Title>Approve Transaction</S.Title>

          <div>
            <S.Link href={data.origin ? data.origin : '#'}>
              {data.origin || 'The website'}
            </S.Link>
          </div>
        </S.Centered>

        <S.Account>
          <div>Source account</div>
          <div>
            <CopyText
              text={account.publicKey}
              custom={<div>{maxText(account.name, 12)}</div>}
            />
          </div>
        </S.Account>
      </S.TopContainer>

      <div className="content">
        {!operations ? (
          <>
            <NoData
              msg="Invalid xdr"
              className="h-[300px] flex items-center justify-center"
            />
            <ButtonContainer>
              <Button
                variant="primary"
                size="medium"
                content="Close"
                onClick={onCancel}
              />
            </ButtonContainer>
          </>
        ) : (
          <>
            <ScrollBar isHidden maxHeight={235}>
              <Operations operations={operations} />{' '}
            </ScrollBar>
            <ButtonContainer mt={32}>
              <Button
                type="submit"
                variant="primary"
                size="medium"
                content="Confirm"
                onClick={onConfirm}
              />
            </ButtonContainer>
            <ButtonContainer mt={15}>
              <Button
                variant="default"
                size="medium"
                content="Cancel"
                onClick={onCancel}
              />
            </ButtonContainer>
          </>
        )}
      </div>
    </>
  );
};

export default ApproveTransaction;
