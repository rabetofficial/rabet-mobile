import React, { useState } from 'react';
import StellarSdk, { Transaction } from 'stellar-sdk';

import Button from 'components/common/Button';
import ExtTitle from 'components/common/ExitTitle';
import CopyText from 'components/common/CopyText';
import ButtonContainer from 'components/common/ButtonContainer';

import Operations from './Operations';

import * as S from './styles';

type ApproveType = {
  onCancel: () => void;
};
const ApproveTransaction = ({ onCancel }: ApproveType) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const MockData = {
    name: 'John Due',
    host: 'host',
    title: 'title',
    publicKey:
      'GDHKYJMUNZ4STELQ7K5EH6TDGKJ2QJ5UPX5HWLOFWRC4H7NFG4JJHNFE',
    network: 'main network',
    xdr: 'sth xdr',
  };

  const handleConfirm = () => {
    console.log(' ');
  };

  const handleClose = () => {
    console.log(' ');
  };

  // let transaction;

  try {
    // const obj = StellarSdk.xdr.TransactionEnvelope.fromXDR(
    //   MockData.xdr,
    //   'base64',
    // );
    // transaction = new Transaction(obj, StellarSdk.Networks.PUBLIC);
  } catch (e) {
    return (
      <>
        <S.Confirm>
          <ExtTitle title={MockData.network} />

          <div className="content">
            <p>Invalid XDR</p>
          </div>

          <ButtonContainer>
            <Button
              variant="primary"
              size="medium"
              content="Close"
              onClick={handleClose}
            />
          </ButtonContainer>
        </S.Confirm>
      </>
    );
  }

  // const { _operations: operations } = transaction;

  const shownName =
    MockData.name.length < 12
      ? MockData.name
      : `${MockData.name.slice(0, 13)}...`;

  return (
    <div>
      <S.NetworkStatus>Main network</S.NetworkStatus>
      <div className="content">
        <S.ImgContainer>
          <img
            src={`https://logo.clearbit.com/${MockData.host}`}
            alt={MockData.host}
            className={!isImageLoaded ? 'image-error' : ''}
            onError={() => {
              setIsImageLoaded(false);
            }}
          />

          {!isImageLoaded ? (
            <S.HostStyle>
              {MockData.host[0].toUpperCase()}
            </S.HostStyle>
          ) : (
            ''
          )}
        </S.ImgContainer>
        <S.Title>Approve Transaction</S.Title>
        <S.Link href="#">{MockData.host}</S.Link>
        <S.Account>
          <div>Source account</div>
          <S.AccountName>
            <CopyText text={MockData.publicKey} custom={shownName} />
          </S.AccountName>
        </S.Account>
      </div>

      <Operations operations={operations} />

      <ButtonContainer mt={47}>
        <Button
          type="submit"
          variant="primary"
          size="medium"
          content="Connect"
          onClick={handleConfirm}
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
  );
};

export default ApproveTransaction;
